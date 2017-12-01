import { Component } from '@angular/core';
import { PersonnesService} from './personnes.service';
import { ActivatedRoute } from '@angular/router';
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
  
  constructor (private route : ActivatedRoute, private personnesService : PersonnesService){
	  
	  
	  personnesService.requetePersonnes()
			.then(donnees => this.donneeChargee(donnees));
	  
  }
  
  donneeChargee = function(donnees){
	  var personnes = JSON.parse(donnees._body);
	  this.liste = personnes;
	  
	  var nom = this.route.snapshot.params.nom;
	  this.personne = this.liste[0];
	  
	  for (var i = 0;i<this.liste.length;i++){
			if (this.liste[i].nom==nom){
				this.personne = this.liste[i];			
			}
	  }

	  
  }
			
  clickPersonne = function(a){
		this.personne = a;
  }
}
