import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {database, firestore} from 'firebase';
import {AuthData} from '../../../services/auth.service';

@Component({
    selector: 'app-public',
    templateUrl: './public.component.html',
    styleUrls: ['./public.component.css']
})
export class PublicComponent implements OnInit {
    oldUsername: string;
    usernameSetData: {
        name: string;
        imgUrl: string;
        uid: string;
    };
    usrname = new FormGroup({
        usernameFormControl: new FormControl('', [Validators.required])
    });
    username: string;
    ggbkl = firestore().doc(`heicsa/${this.authdata.heicsaUser.uId}/userdata/public`).get().then((v) => {
        v.data();
    });
    available = false;
    hidden = true;

    constructor(public authdata: AuthData) {
    }

    hUc(a: string): void {
        database().ref(`heicsa/usernames/${a}`).once('value', (v) => {
            if (v.val() === null) {
                this.hidden = false;
                this.available = true;
            } else {
                this.hidden = false;
                this.available = false;
            }
        }).then(() => {
            if (this.available) {
                this.changeUsername(a).then(r => {
                });
            }
        });
    }

    async changeUsername(a: string): Promise<void> {
        try {
            await database().ref(`heicsa/usernames/${this.oldUsername}`).remove();
            await database().ref(`heicsa/usernames/${a}`).set(
                this.usernameSetData = {
                    name: this.authdata.heicsaUser.name,
                    imgUrl: this.authdata.heicsaUser.imgUrl,
                    uid: this.authdata.heicsaUser.uId
                }
            );
            await firestore().doc(`heicsa/${this.authdata.heicsaUser.uId}/userdata/public`).update({username: a});
        }catch (e) {
            console.log(e.message);
        }
    }

    ngOnInit(): void {
    }
}
