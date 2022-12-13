import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-cerrar-sesion',
  templateUrl: './cerrar-sesion.page.html',
  styleUrls: ['./cerrar-sesion.page.scss'],
})
export class CerrarSesionPage implements OnInit {


  constructor(public alertController: AlertController,
    public navCtrl: NavController,
    private menuController: MenuController) { }

  ngOnInit() {
  }



  async salir(){
    const alert = await this.alertController.create({
      header: 'Salir',
      message: '¿Deseas Cerrar Sesion?',
      buttons: [
        {
          text: 'No',
          handler: () => {
            
          }
        }, {
          text: 'Si',
          handler: () => {
            localStorage.removeItem('ingresado');
            this.navCtrl.navigateRoot('login');
          }
        }
      ]
    });

    await alert.present();
    
  }
  mostrarMenu()
  {
    this.menuController.open('first');
  }
}
