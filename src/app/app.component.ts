import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Store App en Anglular';

  getName():void{
    console.log('¡¡Hola!!');
  }
}
