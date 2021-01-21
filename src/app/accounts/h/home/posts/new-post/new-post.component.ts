import { Component, OnInit } from '@angular/core';
import { Post } from '../../../../../interfaces/posts';
import { MatSnackBar } from '@angular/material/snack-bar';
import { auth, firestore, storage } from 'firebase';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css'],
})
export class NewPostComponent implements OnInit {
  a = true;
  user = auth().currentUser;
  ap: Post;
  abcID: string;
  Caption: string;
  priv = false;
  private pID: string;
  Loader: boolean;
  hasImg = false;
  isHovering: boolean;
  file: File;
  i = 0;
  task: firebase.storage.UploadTask;
  percentage: number;
  path = 'pathNull';
  picArray: [{ downloadURL: any; storagePath: any }];
  charac: string;
  running = false;
  pathString: any;
  downloadURLpromise: any;
  username: any;

  constructor(private snackBar: MatSnackBar) {
  }

  toggleHover(event: boolean): any {
    this.isHovering = event;
  }

  onDrop(files: File): any {
    console.log('ondrop');
    this.file = files;
    this.startUpload();
  }

  postIdGenrate(): any {
    this.a = false;
    this.i = 0;
    this.pID = Date.now() + firestore().collection(`heicsa/${this.user.uid}/posts/`).doc().id;
    console.log(this.pID);
    this.abcID = this.pID;
  }

  async triggerPosting(): Promise<void> {
    console.log('trigger posting');
    try {
      this.Loader = true;
      console.log(this.picArray);
      (this.ap = {
        time: Date.now(),
        priv: this.priv,
        hasImg: this.hasImg,
        postId: this.abcID,
        ownerDetails: {
          Name: this.user.displayName,
          accVerified: this.user.emailVerified,
          uIdRef: '',
          postedTo: {
            ifGroup: false,
            privGroup: false,
            group: {
              groupName: '',
              groupId: '',
            },
            selfPost: false,
            friendsWall: {
              friendsName: '',
              closeFriend: false,
            },
          },
        },
        postDetails: {
          caption: this.Caption,
          postedPicUrl: this.picArray,
          action: {
            //TODO
          },
        },
      });
      await firestore()
        .doc(`heicsa/${this.user.uid}/posts/${this.ap.postId}`)
        .set(this.ap, { merge: true });
      console.log('posted successfully');
      this.snackBar.open('Posted Successfully', 'ok', {
        duration: 2000,
      });
      console.log(this.picArray);
      this.Loader = false;
      this.a = true;
    } catch (error) {
      this.Loader = false;
      this.snackBar.open(error, 'ok', {
        duration: 2000,
      });
      console.log(error);
    }
  }

  makeConst(length: number) {
    var result = '';
    const characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_^%$#@';
    const charactersLength = characters.length;
    for (let c = 0; c < length; c++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  makeid(length: number) {
    var result = '';
    this.charac = this.makeConst(62);
    const charactersLength = this.charac.length;
    for (let d = 0; d < length; d++) {
      result += this.charac.charAt(
        Math.floor(Math.random() * charactersLength)
      );
    }
    return result;
  }

  startUpload() {
    try {
      console.log('Start upload');
      if (this.priv) {
        this.path = `heicsa/${this.user.uid}/privateposts/${this.abcID}/${Date.now()}_${this.makeid(5)}_${this.makeid(4)}`;
      } else {
        this.path = `heicsa/2posts/${this.abcID}/${Date.now()}_${this.makeid(5)}_${this.makeid(4)}`;
      }
      this.pathString = this.path;
      console.log(this.path.toString());
      this.task = storage().ref(this.pathString).put(this.file);
      this.task.then(() => {
        storage().ref(this.pathString).getDownloadURL().then(
          (result) => {
            this.hasImg = true;
            if (this.picArray == null) {
              this.picArray = [
                {
                  downloadURL: result.toString(),
                  storagePath: this.pathString.toString(),
                },
              ];
            } else {
              this.picArray.push({
                downloadURL: result.toString(),
                storagePath: this.pathString.toString(),
              });
            }
          });
      });
      this.task.on('state_changed', (snapshot) => {
        this.percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        switch (snapshot.state) {
          case storage.TaskState.PAUSED:
            this.running = false;
            console.log('Upload is paused');
            break;
          case storage.TaskState.RUNNING:
            this.running = true;
            console.log('Upload is running');
            break;
          case storage.TaskState.ERROR:
            this.running = false;
            storage().ref(this.pathString).delete();
            break;
          case storage.TaskState.CANCELED:
            this.running = false;
            storage().ref(this.pathString).delete();
            break;
          case storage.TaskState.SUCCESS:
            this.running = false;
            console.log('Upload was successful');
            break;
        }
      });
    } catch (error) {
      console.log(error.message);
    }
  }

  ngOnInit(): void {
  }
}
