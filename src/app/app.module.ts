import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CompteurService } from './compteur.service';
import { PersonnesService} from './personnes.service';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { DetailComponent } from './detail/detail.component';
import { AccueilComponent } from './accueil/accueil.component';
import { RouterModule } from '@angular/router';
import { RouterComponent } from './router/router.component'


@NgModule({
  declarations: [
    AppComponent,
    DetailComponent,
    AccueilComponent,
    RouterComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpModule, 
	RouterModule.forRoot([{ path:"accueil", component:AccueilComponent},
						  { path:"scientifiques/:nom", component:AppComponent}])
  ],
  providers: [CompteurService, PersonnesService],
  bootstrap: [RouterComponent]
})
export class AppModule { }
