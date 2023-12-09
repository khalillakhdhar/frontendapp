import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-calcule',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './calcule.component.html',
  styleUrl: './calcule.component.css'
})
export class CalculeComponent {
  f:number=1;
  n:number=1;
  factoriel()
  {
    for(let i=2;i<=this.n;i++)
    {
      this.f=this.f*i;
      // this.f*=i;
    }
    alert("le factoriel de "+this.n+" est "+this.f);
  }
  /*
  le pgcd est le plus grand diviseur commun entre deux nombres qui se calcule comme suit:
  pgcd(a,b)=>
  tant que a!=b faire
  si a>b alors
  a=a-b;
  sinon b=b-a;
  */

}
