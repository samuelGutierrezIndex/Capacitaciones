import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { ManualesRoutingModule } from './manuales-routing.module';
import { CategoriesComponent } from './pages/categories/categories.component';
import { ListManualesComponent } from './pages/list-manuales/list-manuales.component';


@NgModule({
  declarations: [
    CategoriesComponent,
    ListManualesComponent
  ],
  imports: [
    ManualesRoutingModule,
    SharedModule
  ],
  exports:[
    CategoriesComponent,
    ListManualesComponent
  ]
})
export class ManualesModule { }
