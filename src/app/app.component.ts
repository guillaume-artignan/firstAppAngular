import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Liste des Scientifiques';
  
  
  personne = {
				nom :"Einstein",
				prenom : "Albert",
				description :"Il publie sa théorie de la relativité restreinte en 1905 et sa théorie de la gravitation dite relativité générale en 1916. Il contribue largement au développement de la mécanique quantique et de la cosmologie, et reçoit le prix Nobel de physique de 1921 pour son explication de l’effet photoélectrique2. Son travail est notamment connu du grand public pour l’équation E=mc2, qui établit une équivalence entre la matière et l’énergie d’un système.",
				travail : "Relativité Générale"
			};	
			
  count = 0;
  
  clickEffectue = function(){
		this.count++;
		this.personne.nom = this.personne.nom +" "+ this.count;
  }
}
