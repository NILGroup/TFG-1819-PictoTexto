import { Component } from '@angular/core';
import { Picto } from './finder/transformer/picto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pict2textFront';
  pictoPhrase: Picto[] =[];
}
