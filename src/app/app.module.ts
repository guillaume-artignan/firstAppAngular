import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CompteurService } from './compteur.service';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { DetailComponent } from './detail/detail.component';


@NgModule({
  declarations: [
    AppComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [CompteurService],
  bootstrap: [AppComponent]
})
export class AppModule { }
