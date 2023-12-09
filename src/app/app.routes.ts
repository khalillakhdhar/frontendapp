import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SecondComponent } from './second/second.component';
import { CalculeComponent } from './calcule/calcule.component';
import { PgcdComponent } from './pgcd/pgcd.component';
import { DiviseurComponent } from './diviseur/diviseur.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' }, // redirect to `home` (best practice)
    { path: 'home', component: HomeComponent },
    {path: 'second', component: SecondComponent},
    {path:"calcule", component:CalculeComponent},
    {path:'pgcd', component:PgcdComponent},
    {path:'diviseur',component:DiviseurComponent}

];
