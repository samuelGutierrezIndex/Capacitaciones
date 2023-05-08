import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-title-h4',
  templateUrl: './title-h4.component.html',
  styleUrls: ['./title-h4.component.scss']
})
export class TitleH4Component {
  @Input() text: string = '';

  constructor(){
    
  }
}
