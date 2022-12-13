import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IAsistencia } from '../interfaces/iasistencia';
import { AsistenciasService } from 'src/app/services/asistencias.service';

@Component({
  selector: 'app-agregar-asistencias',
  templateUrl: './agregar-asistencias.page.html',
  styleUrls: ['./agregar-asistencias.page.scss'],
})
export class AgregarAsistenciasPage implements OnInit {

  newAsistencia: IAsistencia = {
    seccion: "", 
    fecha: "",

  }

  constructor(private asistenciaService: AsistenciasService, 
              private router: Router) { }

  ngOnInit() {
  }

  crearAsistencia(){
    this.asistenciaService.crearAsistencia(this.newAsistencia).subscribe();
    this.router.navigateByUrl("/generarqr");
  }

}
