import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonIcon } from '@ionic/angular/standalone';
import { CitaService } from 'src/app/servicio/cita.service';
import { Cita } from 'src/app/modelo/cita';
import { ComponentePadreComponent } from 'src/app/componentes/componente-padre/componente-padre.component';
import { addIcons } from 'ionicons';
import { settingsOutline, arrowBackOutline } from 'ionicons/icons'
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-gestion-citas',
  templateUrl: './gestion-citas.page.html',
  styleUrls: ['./gestion-citas.page.scss'],
  standalone: true,
  imports: [ ComponentePadreComponent, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,
    IonButton, IonIcon,  RouterModule
  ]
})
export class GestionCitasPage implements OnInit {

  constructor(private citaService:CitaService) {
        addIcons({arrowBackOutline,settingsOutline});
  }

  citas:Cita[] = []

  ngOnInit(): void {
    this.citas = this.citaService.getCita()
  }

}



