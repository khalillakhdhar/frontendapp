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

}
