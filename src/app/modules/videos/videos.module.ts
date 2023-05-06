import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesComponent } from './categories/categories.component';
import { ListvideosCommercialComponent } from './listvideos-commercial/listvideos-commercial.component';

@NgModule({
  declarations: [
    CategoriesComponent,
    ListvideosCommercialComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    CategoriesComponent,
    ListvideosCommercialComponent
  ]
})
export class VideosModule { }
