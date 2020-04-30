import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { CitaMedicaComponent } from './pages/cita-medica/cita-medica.component';
import { ExamenesComponent } from './pages/examenes/examenes.component';
import { MedicamentosComponent } from './pages/medicamentos/medicamentos.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: 'citas', component: CitaMedicaComponent
  },
  {
    path: 'examenes', component: ExamenesComponent
  },
  {
    path: 'medicamentos', component: MedicamentosComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  { path: '**', redirectTo: 'login' }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
