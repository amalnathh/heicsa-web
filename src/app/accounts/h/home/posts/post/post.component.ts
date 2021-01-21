import { Component, OnInit } from '@angular/core';
import {Post} from '../../../../../interfaces/posts';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  post: Post;
  imgUrl: string;
  postImgUrl: string;
  userName = 'AmalNath ';
  groupname = "SHittier malayalam movies"
  constructor() {
    this.postImgUrl = 'assets/app/home/astronaut.png';
    this.imgUrl = this.postImgUrl;
  }

  ngOnInit(): void {
  }

}
