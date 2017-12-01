import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class PersonnesService {

	liste = [{nom :"Einstein", prenom : "Albert", description :"Il publie sa théorie de la relativité restreinte en 1905 et sa théorie de la gravitation dite relativité générale en 1916. Il contribue largement au développement de la mécanique quantique et de la cosmologie, et reçoit le prix Nobel de physique de 1921 pour son explication de l’effet photoélectrique2. Son travail est notamment connu du grand public pour l’équation E=mc2, qui établit une équivalence entre la matière et l’énergie d’un système.", travail : "Relativité Générale"},
		  {nom :"Faraday", prenom : "Michael", description :"Il publie sa théorie de la relativité restreinte en 1905 et sa théorie de la gravitation dite relativité générale en 1916. Il contribue largement au développement de la mécanique quantique et de la cosmologie, et reçoit le prix Nobel de physique de 1921 pour son explication de l’effet photoélectrique2. Son travail est notamment connu du grand public pour l’équation E=mc2, qui établit une équivalence entre la matière et l’énergie d’un système.", travail : "Relativité Générale"},
		  {nom :"Curie", prenom : "Marie", description :"Il publie sa théorie de la relativité restreinte en 1905 et sa théorie de la gravitation dite relativité générale en 1916. Il contribue largement au développement de la mécanique quantique et de la cosmologie, et reçoit le prix Nobel de physique de 1921 pour son explication de l’effet photoélectrique2. Son travail est notamment connu du grand public pour l’équation E=mc2, qui établit une équivalence entre la matière et l’énergie d’un système.", travail : "Relativité Générale"},
          {nom :"Curie", prenom : "Pierre", description :"Il publie sa théorie de la relativité restreinte en 1905 et sa théorie de la gravitation dite relativité générale en 1916. Il contribue largement au développement de la mécanique quantique et de la cosmologie, et reçoit le prix Nobel de physique de 1921 pour son explication de l’effet photoélectrique2. Son travail est notamment connu du grand public pour l’équation E=mc2, qui établit une équivalence entre la matière et l’énergie d’un système.", travail : "Relativité Générale"}]
  
  constructor(private http : Http){}
  
  requetePersonnes = function(){
	return this.http
		.get("http://92.222.69.104:8080/personnes/all")
		.toPromise();  
  }
  
  donnePersonnes = function(){
	return this.liste;  
  }

}
