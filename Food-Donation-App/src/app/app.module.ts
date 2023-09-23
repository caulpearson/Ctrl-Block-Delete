import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeedComponent } from './feed/feed.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { PostComponent } from './post/post.component';

@NgModule({
  declarations: [
    AppComponent,
    FeedComponent,
    SignInComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
