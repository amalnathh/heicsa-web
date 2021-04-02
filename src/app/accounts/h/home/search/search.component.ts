import {Component, OnInit} from '@angular/core';
import { database } from 'firebase';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
    constructor() {
    }

    items = [{st: 'This is a demo'}, {st: 'this is another demo'}];
    adb = false;

    ngOnInit(): void {
    }

  // tslint:disable-next-line:typedef
    log(a: string) {
        console.log(a);
        // database().ref(`usernames/${a}}`).once('value', (v) => {
        //     console.log('success');
        //   }).then
    }
}
