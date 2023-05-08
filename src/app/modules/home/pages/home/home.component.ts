import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public title_h1: string;
  // public title_h4: string;

  constructor(){
    this.title_h1 = 'Repositorio de capacitaciones'
    // this.title_h4 = 'Repositorio de capacitaciones'
  }
}
