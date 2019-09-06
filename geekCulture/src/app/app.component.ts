import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'geekCulture';
  isAuth = false;

  appareilOne = "Frigo";
  appareilTwo = "Séche-linge";
  appareilThree = "Ordinateur";
  statusOne = "Off";
  statusTwo = "On";
  statusThree = "Off";

  constructor(){
    setTimeout(
      ()=>{
        this.isAuth = true;
      },4000
    );
  }

  onAllumer() {

    console.log('On allume tout !');

  }

}
