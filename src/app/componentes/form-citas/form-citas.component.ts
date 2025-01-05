import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonItem, IonButton, IonInput, IonCard, IonCardHeader, IonCardTitle  } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { addCircleOutline } from 'ionicons/icons';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-form-citas',
  templateUrl: './form-citas.component.html',
  styleUrls: ['./form-citas.component.scss'],
  standalone: true,
  imports: [FormsModule, IonItem, IonButton, IonInput, IonCard, IonCardHeader, IonCardTitle, CommonModule]
})
export class FormCitasComponent  implements OnInit {
  fraseStr:string = '';
  autorStr:string = '';

  @Output() onCreate = new EventEmitter<{frase:string;autor:string}>()

  constructor() { 
    addIcons({addCircleOutline});
  }


  mensajeFrase: boolean = false
  mensajeAutor: boolean = false

  ngOnInit() {}

onClick(){
    this.onCreate.emit({frase:this.fraseStr, autor:this.autorStr})
    this.fraseStr = '';
    this.autorStr = '';
  }

  async agregar() {
    // Reinicia los mensajes de error antes de validar
    this.mensajeFrase = false;
    this.mensajeAutor = false;
  
    if (this.fraseStr.length < 5) {
      console.log("El campo Frase debe tener al menos 5 caracteres");
      this.mensajeFrase = true;
    }
  
    if (this.autorStr.length < 2) {
      console.log("El campo Autor debe tener al menos 2 caracteres");
      this.mensajeAutor = true;
    }
  
    // Solo emite el evento si no hay errores
    if (!this.mensajeFrase && !this.mensajeAutor) {
      this.onCreate.emit({ frase: this.fraseStr, autor: this.autorStr });
      this.fraseStr = '';
      this.autorStr = '';
    }
  }

}



