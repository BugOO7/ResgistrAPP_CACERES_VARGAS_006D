import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AsistenciasService } from 'src/app/services/asistencias.service';

@Component({
  selector: 'app-generarqr',
  templateUrl: './generarqr.page.html',
  styleUrls: ['./generarqr.page.scss'],
})
export class GenerarqrPage implements OnInit {

  qrCodeString= 'Hola Mundo'; 
  scannedResult:any;

  constructor(private menuController: MenuController) { }

  usuario={
    nom:'',
  }

  generaScan(){
    this.qrCodeString= this.usuario.nom;
  }

  verScan(){
    this.scannedResult=this.qrCodeString;
  }

  ngOnInit() {
  }

  mostrarMenu(){
    this.menuController.open('first');
  }


}
