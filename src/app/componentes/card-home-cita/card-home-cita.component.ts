import { Component, OnInit } from '@angular/core';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle } from '@ionic/angular/standalone'

@Component({
  selector: 'app-card-home-cita',
  templateUrl: './card-home-cita.component.html',
  styleUrls: ['./card-home-cita.component.scss'],
  standalone: true,
  imports:[IonCard, IonCardContent, IonCardHeader, IonCardSubtitle]
})
export class CardHomeCitaComponent implements OnInit {


  ngOnInit() { }
  
  constructor() {
  }
}
