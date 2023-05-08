import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './pages/categories/categories.component';
import { ListVideosComponent } from './pages/list-videos/list-videos.component';

const routes: Routes = [
  
  { path: '', component:  CategoriesComponent},
  { path: 'list-videos', component: ListVideosComponent},
  { path: '**', redirectTo: '/home/categories-videos'},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VideosRoutingModule { }
