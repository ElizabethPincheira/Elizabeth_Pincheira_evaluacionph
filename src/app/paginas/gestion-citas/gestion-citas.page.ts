import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { CitaService } from 'src/app/servicio/cita.service';
import { Cita } from 'src/app/modelo/cita';
import { ComponentePadreComponent } from 'src/app/componentes/componente-padre/componente-padre.component';

@Component({
  selector: 'app-gestion-citas',
  templateUrl: './gestion-citas.page.html',
  styleUrls: ['./gestion-citas.page.scss'],
  standalone: true,
  imports: [ ComponentePadreComponent, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class GestionCitasPage implements OnInit {

  constructor(private citaService:CitaService) {}

  citas:Cita[] = []

  ngOnInit(): void {
    this.citas = this.citaService.getCita()
  }

}



