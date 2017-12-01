import { Component } from '@angular/core';
import { PersonnesService} from './personnes.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers : [PersonnesService]
})

export class AppComponent {
  title = 'Liste des Scientifiques';
  
  liste;
  personne;
  
  constructor (private personnesService : PersonnesService){
	  this.liste = personnesService.donnePersonnes();
	  this.personne = this.liste[0];
  }
			
  clickPersonne = function(a){
		this.personne = a;
  }
}
