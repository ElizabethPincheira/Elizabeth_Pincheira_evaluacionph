import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Cita } from 'src/app/modelo/cita';
import { IonItem, IonLabel, IonIcon, IonList } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { trashOutline } from 'ionicons/icons';

@Component({
  selector: 'app-list-citas',
  templateUrl: './list-citas.component.html',
  styleUrls: ['./list-citas.component.scss'],
  standalone: true,
  imports: [CommonModule, IonItem, IonLabel, IonIcon, IonList] 
})
export class ListCitasComponent  implements OnInit {

    @Input() cita:Cita[] = []

  constructor() {
    addIcons({trashOutline});
   }

  //  listacitas: Array<{ cita: string, autor: string }> = [];


  ngOnInit() {}

}




