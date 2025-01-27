import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonIcon} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { settingsOutline, arrowBackOutline } from 'ionicons/icons'
import { RouterModule } from '@angular/router';
import { ConfiguracionesEliminarCitaComponent } from 'src/app/componentes/configuraciones-eliminar-cita/configuraciones-eliminar-cita.component';


@Component({
  selector: 'app-configuracion',
  templateUrl: './configuracion.page.html',
  styleUrls: ['./configuracion.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, RouterModule,
    IonIcon, ConfiguracionesEliminarCitaComponent
  ]
})
export class ConfiguracionPage implements OnInit {

  constructor() { 
    addIcons({arrowBackOutline,settingsOutline});
  }

  ngOnInit() {
  }

}
