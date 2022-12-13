import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-recuperacuenta',
  templateUrl: './recuperacuenta.page.html',
  styleUrls: ['./recuperacuenta.page.scss'],
})
export class RecuperacuentaPage implements OnInit {

  constructor(private menuController: MenuController) { }
  ngOnInit() {
  }
  mostrarMenu()
  {
    this.menuController.open('first');
  }
  usuario={
    password:'',
    email:'',
  }
  onSubmit(){
    console.log('submit');
    console.log(this.usuario);
  }
}
