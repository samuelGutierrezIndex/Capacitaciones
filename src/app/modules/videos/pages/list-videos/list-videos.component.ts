import { Component } from '@angular/core';

@Component({
  selector: 'app-list-videos',
  templateUrl: './list-videos.component.html',
  styleUrls: ['./list-videos.component.scss']
})
export class ListVideosComponent {
  public title: string;

  constructor(

  ){
    this.title = 'Videos de capacitaciones para modulo comercial';

  }
}
