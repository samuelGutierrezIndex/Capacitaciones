import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


// components of Angular Material
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { TitleH1Component } from './components/titles/title-h1/title-h1.component';
import { TitleH4Component } from './components/titles/title-h4/title-h4.component';
import { TextComponent } from './components/text/text.component';

@NgModule({

  declarations: [
    TitleH1Component,
    TitleH4Component,
    TextComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatToolbarModule,
    HttpClientModule,
    MatSidenavModule,
    MatListModule
  ],

  exports:[
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    MatToolbarModule,
    HttpClientModule,
    MatSidenavModule,
    MatListModule,
    TitleH1Component,
    TitleH4Component,
    TextComponent
  ]

})
export class SharedModule { }
