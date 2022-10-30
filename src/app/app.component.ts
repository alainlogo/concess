import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'concess';


  text = 'wewe'
  nbClick = 0

  displayText = false



  // VOID C'EST QUE ELLE VA RIEN RETOURNER
  // onClickButton(): void{
  //   this.text = 'aaaah'
  //   this.nbClick = this.nbClick +1
  // }

    leBtn(): void{
    // si displayText est égal a false tue le passe a true sisnon tu le passe a true
    this.displayText = this.displayText ? false : true
  }
}
