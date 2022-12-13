import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { IngresadoGuard } from './guards/ingresado.guard';
import { NoIngresadoGuard } from './guards/no-ingresado.guard';
import { Ingresado2Guard } from './guards/ingresado2.guard';
import { Noingresado2Guard } from './guards/Noingresado2.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'contexto',
    loadChildren: () => import('./pages/contexto/contexto.module').then( m => m.ContextoPageModule)
  },
  {
    path: 'generarqr',
    loadChildren: () => import('./pages/generarqr/generarqr.module').then( m => m.GenerarqrPageModule),
    canActivate: [NoIngresadoGuard]
  },
  {
    path: 'registrate',
    loadChildren: () => import('./pages/registrate/registrate.module').then( m => m.RegistratePageModule)
  },
  {
    path: 'cambiarcontrasena',
    loadChildren: () => import('./pages/cambiarcontrasena/cambiarcontrasena.module').then( m => m.CambiarcontrasenaPageModule)
  },
  {
    path: 'camaramovil',
    loadChildren: () => import('./pages/camaramovil/camaramovil.module').then( m => m.CamaramovilPageModule),
    canActivate: [Ingresado2Guard,IngresadoGuard]
    
  },
  {
    path: 'cerrar-sesion',
    loadChildren: () => import('./pages/cerrar-sesion/cerrar-sesion.module').then( m => m.CerrarSesionPageModule),
    
  },
  {
    path: 'recuperacuenta',
    loadChildren: () => import('./pages/recuperacuenta/recuperacuenta.module').then( m => m.RecuperacuentaPageModule)
  },
  {
    path: 'mensajenviado',
    loadChildren: () => import('./pages/mensajenviado/mensajenviado.module').then( m => m.MensajenviadoPageModule)
  },
  {
    path: 'mensajeregistro',
    loadChildren: () => import('./pages/mensajeregistro/mensajeregistro.module').then( m => m.MensajeregistroPageModule)
  },
  {
    path: 'noticias',
    loadChildren: () => import('./pages/noticias/noticias.module').then( m => m.NoticiasPageModule),
   
  },
  {
    path: 'datos',
    loadChildren: () => import('./pages/datos/datos.module').then( m => m.DatosPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule),
  
  },
  {
    path: 'registro',
    loadChildren: () => import('./pages/registro/registro.module').then( m => m.RegistroPageModule),
    
  },
  {
    path: 'listar-asistencias',
    loadChildren: () => import('./pages/listar-asistencias/listar-asistencias.module').then( m => m.ListarAsistenciasPageModule)
  },
  {
    path: 'agregar-asistencias',
    loadChildren: () => import('./pages/agregar-asistencias/agregar-asistencias.module').then( m => m.AgregarAsistenciasPageModule)
  },
  {
    path: 'detail-asistencia/:id',
    loadChildren: () => import('./pages/detail-asistencia/detail-asistencia.module').then( m => m.DetailAsistenciaPageModule)
  },
  {
    path: 'listar-alumnos',
    loadChildren: () => import('./pages/listar-alumnos/listar-alumnos.module').then( m => m.ListarAlumnosPageModule)
  },
  {
    path: 'agregar-alumnos',
    loadChildren: () => import('./pages/agregar-alumnos/agregar-alumnos.module').then( m => m.AgregarAlumnosPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
