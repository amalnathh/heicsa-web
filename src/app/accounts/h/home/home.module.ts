import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { PostsComponent } from './posts/posts.component';
import { CommentBoxComponent } from './posts/post/comment-box/comment-box.component';
import { PostComponent } from './posts/post/post.component';
import { NewPostComponent } from './posts/new-post/new-post.component';
import { SearchModule } from './search/search.module';
import { MenuModule } from './menu/menu.module';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatInputModule } from '@angular/material/input';
import { MatRippleModule } from '@angular/material/core';
import { FormsModule } from '@angular/forms';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { DropzoneDirective } from './dropzone.directive';
import { NotificationBlocksComponent } from './notifications/notification-blocks/notification-blocks.component';

@NgModule({
  declarations: [
    HomeComponent,
    NotificationsComponent,
    PostsComponent,
    CommentBoxComponent,
    PostComponent,
    NewPostComponent,
    DropzoneDirective,
    NotificationBlocksComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatIconModule,
    MatButtonModule,
    MatSnackBarModule,
    MatInputModule,
    MatRippleModule,
    SearchModule,
    MenuModule,
    FormsModule,
    MatProgressBarModule,
  ],
})
export class HomeModule {}
