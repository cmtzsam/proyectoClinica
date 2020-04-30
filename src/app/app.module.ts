import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './pages/home/home.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { CitaMedicaComponent } from './pages/cita-medica/cita-medica.component';
import { ExamenesComponent } from './pages/examenes/examenes.component';
import { MedicamentosComponent } from './pages/medicamentos/medicamentos.component';
import { LoginComponent } from './pages/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SidenavComponent,
    CitaMedicaComponent,
    ExamenesComponent,
    MedicamentosComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
