import { Component } from '@angular/core';
import {FinderService} from 'src/app/finder/service/finder-service.service'
import {Picto} from 'src/app/finder/transformer/picto'
@Component({
  selector: 'app-finder',
  templateUrl: './assets/finder.component.html',
  providers: [FinderService],
  styleUrls: ['./assets/finder.component.css']
})
export class FinderComponent  {
   myPicto: Picto[];

  constructor( private pictoService : FinderService) { 
    this.myPicto=[]
  }


  private getPictosByName(name:string){
        this.pictoService.getPictosByName(name)
          .subscribe((data: Picto) =>{
            let i=0;
            for(i=0; i<data['pictos'].length;++i)  
              this.myPicto.push(new Picto(data['pictos'][i]));
          })
          console.log(this.myPicto)
        }


}
