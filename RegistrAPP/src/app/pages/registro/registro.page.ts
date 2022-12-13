import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { RegistroserviceService, Usuario } from '../../services/registroservice.service';
import { ToastController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import {
  FormGroup, FormControl, Validators, FormBuilder
} from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  formularioRegistro: FormGroup; 
  newUsuario: Usuario = <Usuario>{};
  usuarios: Usuario[] =[]; 

  constructor(private alertController: AlertController,
              private navController: NavController,
              private registroService: RegistroserviceService,
              private toast: ToastController, 
              private fb:FormBuilder,
              private menuController: MenuController) {
                this.formularioRegistro = this.fb.group({
                  'nombre' : new FormControl("", Validators.compose([
                    Validators.required,
                    Validators.minLength(4),
                    Validators.maxLength(12),
                   
                  ])), 
                  'correo' : new FormControl("", [Validators.required, Validators.email]), 
                  'tipo': new FormControl("", Validators.compose([
                    Validators.required,
                    Validators.minLength(6),
                    Validators.maxLength(8),
                   
                  ])), 
                  'password': new FormControl("", Validators.compose([
                    Validators.required,
                    Validators.minLength(4),
                    Validators.maxLength(12),
                   
                  ])), 
                  'confirmaPass': new FormControl("", Validators.compose([
                    Validators.required,
                    Validators.minLength(4),
                    Validators.maxLength(12),
                    
                  ])),
        });
      }

  ngOnInit() {
  }

  async CrearUsuario(){
    var form = this.formularioRegistro.value;
    var existe = 0;

    if (this.formularioRegistro.invalid){
      this.alertError();
    }

    else{
    this.newUsuario.nomUsuario=form.nombre;
    this.newUsuario.correoUsuario=form.correo;
    this.newUsuario.passUsuario = form.password;
    this.newUsuario.repassUsuario=form.confirmaPass;
    this.newUsuario.tipUsuario=form.tipo;

    this.registroService.getUsuarios().then(datos=>{ 
      this.usuarios = datos; 
  
      if (!datos || datos.length==0){
        this.registroService.addUsuario(this.newUsuario).then(dato=>{ 
          this.newUsuario=<Usuario>{};
          this.showToast('Usuario Creado satisfactoriamente');
        });
        this.formularioRegistro.reset();
        this.navController.navigateRoot('login');
      }else{
      
      for (let obj of this.usuarios){
        if (this.newUsuario.correoUsuario == obj.correoUsuario){
          existe = 1;
        }
      }//Fin del for
    
        if (existe == 1){
          this.alertCorreoDuplicado();
          this.formularioRegistro.reset();
        }
        else{
          this.registroService.addUsuario(this.newUsuario).then(dato=>{ 
            this.newUsuario=<Usuario>{};
            this.showToast('Usuario Creado satisfactoriamente');
          });
          this.formularioRegistro.reset();
          this.navController.navigateRoot('login');
        }
      }
      })  
    
    }//finelse
  
    }//findelmetodo
  

  async alertError(){
    const alert = await this.alertController.create({ 
      header: 'Error..',
      message: 'Debe completar todos los datos',
      buttons: ['Aceptar']
    })
    await alert.present();
  }

  async alertCorreoDuplicado(){
    const alert = await this.alertController.create({ 
      header: '¡Error!',
      message: 'El correo ingresado ya existe',
      buttons: ['Aceptar']
    })
    await alert.present();
  }

  async showToast(msg){
    const toast = await this.toast.create({
      message: msg,
      duration: 2000
    })
    await toast.present();
  }

  mostrarMenu()
  {
    this.menuController.open('first');
  }

}
