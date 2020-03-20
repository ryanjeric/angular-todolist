import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name:string = 'World';

  constructor(){
    this.changeName('Ryan')
  }

  changeName(name:string){
    this.name = name;
  }

}
