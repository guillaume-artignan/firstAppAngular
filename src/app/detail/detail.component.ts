import { Component, OnInit, Input } from '@angular/core';
import { CompteurService} from '../compteur.service';

@Component({
  selector: 'detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  providers: [CompteurService]
})
export class DetailComponent implements OnInit {
 
  @Input() maPersonne;
   
  constructor(private compteurService:CompteurService)  { }
  
  ngOnInit() {}
  
  clickSurTitre = function(){
	  this.compteurService.ajoute();
	  var v = this.compteurService.donne();
	  console.log(v);
  }
}
