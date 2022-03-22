import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostListComponent } from './posts/post-list/post-list.component';
import {PostCreateComponent} from './posts/post-create/post-create.component'
import { AuthGaurd } from './auth/auth.gaurd';
import { AboutComponent } from './about/about.component';


const routes: Routes = [
  {path: '', component: PostListComponent},
  {path:'about',component: AboutComponent},
  {path: 'create', component: PostCreateComponent, canActivate: [AuthGaurd]},
  {path: 'edit/:postId', component: PostCreateComponent, canActivate: [AuthGaurd]},
  {path: "auth", loadChildren: () => import('./auth/auth.module').then(x => x.AuthModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGaurd]
})
export class AppRoutingModule { }
