import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { VideosRoutingModule } from './videos.routing.module';
import { CategoriesComponent } from './pages/categories/categories.component';
import { ListVideosComponent } from './pages/list-videos/list-videos.component';

@NgModule({
  declarations: [
    CategoriesComponent,
    ListVideosComponent
  ],
  imports: [
    SharedModule,
    VideosRoutingModule
  ],
  exports:[
    CategoriesComponent,
    ListVideosComponent
  ]
})
export class VideosModule { }
