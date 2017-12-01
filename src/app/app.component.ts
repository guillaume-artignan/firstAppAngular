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
  
  liste = [];
  personne = {};
  
  constructor (private personnesService : PersonnesService){
	   
	  personnesService.requetePersonnes()
			.then(donnees => this.donneeChargee(donnees));
	  
  }
  
  donneeChargee = function(donnees){
	  var personnes = JSON.parse(donnees._body);
	  this.liste = personnes;
	  this.personne = this.liste[0];
  }
			
  clickPersonne = function(a){
		this.personne = a;
  }
}
