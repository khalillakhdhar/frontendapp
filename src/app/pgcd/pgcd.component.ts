import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pgcd',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './pgcd.component.html',
  styleUrl: './pgcd.component.css'
})
export class PgcdComponent {

  a:number=1;
  b:number=1;
  // calcule pgcd
  pgcd()
  {
    while(this.a!=this.b)
    {
      if(this.a>this.b)
      {
        this.a=this.a-this.b;
      }
      else
      {
        this.b=this.b-this.a;
      }
    }
    alert("le pgcd est "+this.a);
  }
}
