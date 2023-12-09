import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-second',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './second.component.html',
  styleUrl: './second.component.css'
})
export class SecondComponent {
  titre!:string; // paramétre facultatif
  description?:string; // paramétre obligatoire
  nom:string="teste"; // paramétre obligatoire
  prenom:string=""; // paramétre obligatoire
  valeur1:number=12; // paramétre obligatoire
  remarque:string=""; // paramétre obligatoire
  constructor()
  {
    this.titre="Teste des formulaires";
    //this.description=" on va tester les formulaires avec angular en lecture est en écriture";
  }
  paire()
  {
    if(this.valeur1 % 2==0)
    {
      this.remarque="le nombre est paire";
    }
    else
    {
      this.remarque="le nombre est impaire";
    }
  }


}
