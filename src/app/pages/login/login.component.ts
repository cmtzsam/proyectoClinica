import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsuarioModel } from 'src/app/models/usuario/usuario.model';
import { AuthService } from 'src/app/services/auth.service';

declare var jQuery: any;
declare var $: any;


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})

export class LoginComponent implements OnInit {

  usuario: UsuarioModel;
  
  // El constructor

  constructor( private auth: AuthService ) {
    
  }

  // El OnInit 

  ngOnInit(): void {

    this.usuario = new UsuarioModel();
    this.obtenerUrl();

  }

  // <Funciones nuevas>

  login( form: NgForm ){

    if ( form.invalid ) { return; }

    this.auth.login( this.usuario )
      .subscribe( resp => {

        console.log(resp);

      }, (err) =>{

        console.log(err.error.error.message);
        
      } );

  }

  obtenerUrl(){
    let urlPage = window.location.pathname;
    
    if ( urlPage = '/login' ){
      $('body').addClass("login-int")
      $(".main-page .itmMain:first-child").remove();

      let x = $('app-login');
      x.addClass('full-page-center-flex');

    }

  } 

}
