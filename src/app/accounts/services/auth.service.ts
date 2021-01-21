import {Injectable, NgZone} from '@angular/core';
import {Router} from '@angular/router';
import {auth, database, firestore} from 'firebase';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    auth = auth();
    public user: any;
    // tslint:disable-next-line:variable-name
    G_authReturn = true;
    nameInfo: {
        name: string,
        imgUrl: string,
        uid: string,
    };

    constructor(public router: Router, public ngZone: NgZone) {
    }

    dateOfBirth: Date;
    loginLoading = false;
    signupLoading = false;
    displayName: string;
    snackBarError: string;
    snackbarBool = false;
    dinga = false;
    EMess: string;
    provider = new auth.GoogleAuthProvider();

    async login(email: string, password: string): Promise<void> {
        this.loginLoading = true;
        try {
            await auth()
                .setPersistence(auth.Auth.Persistence.LOCAL)
                .then(() => {
                    return auth().signInWithEmailAndPassword(email, password).then(
                        () => {
                            auth().onAuthStateChanged((user) => {
                                if (user) {
                                    localStorage.setItem('user', JSON.stringify(user));
                                } else {
                                    this.router.navigate(['/login']);
                                }
                            });
                        }
                    );
                });
            this.loginLoading = false;
            await this.ngZone.run(async () => {
                await this.router.navigateByUrl('/home');
            });
        } catch (error) {
            this.snackbarBool = true;
            this.loginLoading = false;
            this.snackBarError = error.message;
        }
    }

    async SignUp(email: string, password: string, username: string, displayName: string, dateOfBirth: any): Promise<void> {
        this.signupLoading = true;
        try {
            const result = await auth()
                .createUserWithEmailAndPassword(email, password);
            await this.SendVerificationMail();
            await result.user.updateProfile({
                displayName
            });
            this.nameInfo = {
                name: result.user.displayName,
                imgUrl: result.user.photoURL,
                uid: result.user.uid
            };
            await database().ref(`usernames/${displayName}`).set(this.nameInfo);
            await firestore().doc(`heicsa/${result.user.uid}/userdata/private`).set(dateOfBirth);
            this.snackbarBool = true;
            this.snackBarError = 'Account created successfully 🤗';
            await this.router.navigateByUrl('/home');
            this.signupLoading = false;
        } catch (error) {
            this.signupLoading = false;
            this.snackbarBool = true;
            this.snackBarError = error.message;
        }
    }

    // tslint:disable-next-line:typedef
    async SignUpWithGoogle() {
        try {
            this.G_authReturn = false;
            await auth()
                .setPersistence(auth.Auth.Persistence.LOCAL)
                .then(async () => {
                    const result = await auth().signInWithPopup(this.provider);
                    localStorage.setItem('user', JSON.stringify(result.user));
                    console.log(result.user.metadata.lastSignInTime);
                    console.log(result.user.metadata.creationTime);
                    //
                    if (result.user.metadata.lastSignInTime === result.user.metadata.creationTime) {
                        console.log('first time');
                        this.nameInfo = {
                            name: result.user.displayName,
                            imgUrl: result.user.photoURL,
                            uid: result.user.uid
                        };
                        let usernameGoogle = result.user.email.slice(0, (result.user.email.length - 10));
                        try {
                            await database().ref(`usernames/${usernameGoogle}`).set(this.nameInfo);
                        } catch (e) {
                            console.log(e.message)
                        }
                        try {
                            let publicData = {username: usernameGoogle};
                            await firestore().collection(`heicsa/${result.user.uid}/userdata/`).add(publicData);
                        } catch (e) {
                            console.log(e.message);
                        }
                    }
                })
                .then(() => {
                    this.ngZone.run(() => {
                        this.router.navigateByUrl('/home');
                    });
                });
            this.G_authReturn = true;
        } catch (error) {
            this.G_authReturn = true;
            this.snackbarBool = true;
            this.snackBarError = error.message;
        }
    }

    async SendVerificationMail(): Promise<void> {
        try {
            await auth()
                .currentUser.sendEmailVerification()
                .then(() => {
                    this.snackbarBool = true;
                    this.snackBarError = 'Verification mail was sent';
                });
        } catch (error) {
            this.snackbarBool = true;
            this.snackBarError = error.message;
        }
    }

    async ForgotPassword(passwordResetEmail: string): Promise<void> {
        try {
            await auth().sendPasswordResetEmail(passwordResetEmail);
            this.EMess = 'We have send a password reset mail.';
        } catch (error) {
            this.dinga = true;
            this.EMess = error.message;
        }
    }

    SignOut(): void {
        try {
            auth().signOut().then(() => {
                localStorage.clear();
                this.router.navigate(['/login']);
            });
        } catch (error) {
            this.snackbarBool = true;
            this.snackBarError = error.message;
        }
    }
}

@Injectable({
    providedIn: 'root',
})
export class AuthData {
    heicsaUser: { imgUrl: string; name: string; accLegit: boolean; email: string; uId: string; };
    homeInitialize = true;
    // tslint:disable-next-line:variable-name
    c_b = true;

    constructor(private router: Router) {
        const data = JSON.parse(localStorage.getItem('user'));
        if (data != null) {
            this.heicsaUser = {
                imgUrl: data.photoURL,
                name: data.displayName,
                accLegit: data.emailVerified,
                email: data.email,
                uId: data.uid,
            };
            this.homeInitialize = false;
            if (this.heicsaUser.imgUrl === null) {
                this.heicsaUser.imgUrl = 'assets/app/home/astronaut.png';
            }
        } else {
            localStorage.clear();
            router.navigate(['/login']);
        }
    }
}
