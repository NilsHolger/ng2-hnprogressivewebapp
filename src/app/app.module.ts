import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { routing } from './app.routes';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { StoriesComponent } from './stories/stories.component';
import { FooterComponent } from './footer/footer.component';
import { ItemComponent } from './item/item.component';
import { DomainPipe } from './domain.pipe';
import { HackerNewsApiService } from './hackernews-api.service';
import { ItemCommentsComponent } from './itemcomments/itemcomments.component';

import { CommentTreeComponent } from './commenttree/commenttree.component';
import { CommentComponent } from './comment/comment.component';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    StoriesComponent,
    FooterComponent,
    ItemComponent,
    DomainPipe,
    ItemCommentsComponent,
    CommentTreeComponent,
    CommentComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [HackerNewsApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
