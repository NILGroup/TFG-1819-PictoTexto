import { Component } from '@angular/core';
import { Picto } from './finder/transformer/picto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  host: {
    '(window:resize)': 'onResize($event)'
  }
})
export class AppComponent {
  title = 'pict2textFront';
  pictoPhrase: Picto[] =[];
  isMobile : boolean = false;

  ngOnInit(){
    localStorage.removeItem('finderResult')
    if(window.innerWidth<961) 
    this.isMobile=true;
  else
    this.isMobile=false;
  }

  onResize(event){
    if(event.target.innerWidth<961) 
      this.isMobile=true;
    else
      this.isMobile=false;
  }

  

}
