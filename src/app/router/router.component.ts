import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<li><a routerLink="/scientifiques/autre">Liste des 	scientifiques</a></li>'
			+' <li><a routerLink="/accueil">Accueil</a></li>'
			+'<li>Autre</li><router-outlet></router-outlet>',
  styleUrls: ['./router.component.css']
})
export class RouterComponent {


}
