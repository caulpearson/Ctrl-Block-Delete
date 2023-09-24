import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostComponent} from "./post/post.component";
import {FeedComponent} from "./feed/feed.component";
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  { path: 'feed', component: FeedComponent},
  { path: 'post', component: PostComponent },
  { path: 'table', component: CartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
