import { Component } from '@angular/core';

interface Componente{
  icon:string;
  name:string;
  redirecTo:string;
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {}


  componentes: Componente[] = [ 
    {
      icon: 'home-outline',
      name: 'Inicio',
      redirecTo: '/inicio',
    },
    {
      icon: 'camera-outline',
      name: 'Desplegar Camara',
      redirecTo:'/camaramovil',
    },
    {
      icon: 'qr-code-outline',
      name: 'Generar QR',
      redirecTo:'/generarqr',
    },
    {
      icon: 'newspaper-outline',
      name: 'Noticias',
      redirecTo:'/noticias',
    },
    {
      icon: 'information-circle-outline',
      name: 'Contexto',
      redirecTo:'/contexto',
    },

    {
      icon: 'log-out-outline',
      name: 'Cerrar Sesión',
      redirecTo:'/cerrar-sesion',
    },
  ];



}
