import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-diviseur',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './diviseur.component.html',
  styleUrl: './diviseur.component.css'
})
export class DiviseurComponent {
x:number=1;
y:number=1;
divisibilite()
{
  if(this.x % this.y==0)
  {
    alert("le nombre "+this.x+" est divisible par "+this.y);
  }
  else
  {
    alert("le nombre "+this.x+" n'est pas divisible par "+this.y);
  }
}
}
