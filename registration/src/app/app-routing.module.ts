import { GaurangComponent } from './gaurang/gaurang.component';
import { HarshComponent } from './harsh/harsh.component';
import { DateMomentComponent } from './date-moment/date-moment.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
  {path:"",component:HomeComponent},
  {path:"register",component:RegisterComponent},
  {path:"date-moment",component:DateMomentComponent},
  {path:"register/harsh",component:HarshComponent},
  {path:"register/gaurang",component:GaurangComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
