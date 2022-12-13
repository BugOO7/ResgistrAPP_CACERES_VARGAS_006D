import { Component, OnInit } from '@angular/core';
import { AsistenciasService } from 'src/app/services/asistencias.service';
import { InfiniteScrollCustomEvent, LoadingController } from '@ionic/angular';
import { IAsistencias } from '../Interfaces/iasistencias';

@Component({
  selector: 'app-listar-asistencias',
  templateUrl: './listar-asistencias.page.html',
  styleUrls: ['./listar-asistencias.page.scss'],
})
export class ListarAsistenciasPage implements OnInit {

  asistencias=[];
  constructor(private asistenciasService: AsistenciasService, private loadCtrl: LoadingController) { }
 
  ngOnInit() {
    this.loadAsistencias();
  }

  async loadAsistencias(event?: InfiniteScrollCustomEvent){
    const loading = await this.loadCtrl.create({
      message : "Cargando..", 
      spinner: "bubbles"
    });
    await loading.present();

    this.asistenciasService.listarAsistencias().subscribe(
      (resp)=>{
        loading.dismiss();
        let listString = JSON.stringify(resp)     //debemos convertir a string el json que recibimos para el arreglo animalitos
        this.asistencias = JSON.parse(listString)
        event?.target.complete();
        console.log(this.asistencias);
      }, 
      (err) =>{
        console.log(err.message)
        loading.dismiss();
      }
    )
  }
}
