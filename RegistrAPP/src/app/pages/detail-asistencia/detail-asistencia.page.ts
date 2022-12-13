import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AsistenciasService } from 'src/app/services/asistencias.service';

@Component({
  selector: 'app-detail-asistencia',
  templateUrl: './detail-asistencia.page.html',
  styleUrls: ['./detail-asistencia.page.scss'],
})
export class DetailAsistenciaPage  {

  asistencia = {
    id: [],
    seccion: [],
    fecha: "22-05-2022"


  }

  qrCodeString= this.asistencia.seccion; 
  scannedResult:any;

  constructor(private asistenciasService: AsistenciasService, private router: Router) { }

  ionViewWillEnter(){
    this.getAsistenciaByID(this.getIdFromURL())
  }

  getIdFromURL(){
    let url = this.router.url
    let arr = url.split("/", 3)
    let id = parseInt(arr[2])
      return id
  }

  getAsistenciaByID(asistenciaID:Number){
    this.asistenciasService.getAsistenciaByID(asistenciaID).subscribe(
      (resp:any) => {
        this.asistencia = {
          id: resp[0].id,
          seccion: resp[0].seccion,
          fecha: resp[0].fecha
        }
      }
    )
  }
  
  usuario={
    nom:'',
  }  
  generaScan(){
    this.qrCodeString= this.asistencia.seccion;
  }

  verScan(){
    this.scannedResult=this.qrCodeString;
  }
}
