//En el curso se omite la inicialización
import { Component/*, OnInit*/ } from '@angular/core';
import { Router } from '@angular/router';
import { ShoppingCartService } from '../../services/shopping-cart.service';

@Component({
  selector: 'app-header',
  // se puede usar un template mediante un archivo o inline
  //templateUrl: './header.component.html',
  template: `
    <mat-toolbar color="primary">
      <a [routerLink]="['/']"><span>My Store</span></a>
      <span class="spacer"></span>
      <app-cart class="mouseHover" (click)="goToCheckout()"></app-cart>
    </mat-toolbar>`,
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent /*implements OnInit*/ {

  /*constructor() { }

  ngOnInit(): void {
  }*/

  constructor(private router:Router){}
  goToCheckout():void{
    this.router.navigate(['/checkout']);
  }

}
