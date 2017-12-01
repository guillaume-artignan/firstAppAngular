import { Injectable } from '@angular/core';

@Injectable()
export class CompteurService {

   compteur = 0;
   
   ajoute = function(){
	   this.compteur++;
   }
   
   donne = function(){
	   return this.compteur;
   }

}
