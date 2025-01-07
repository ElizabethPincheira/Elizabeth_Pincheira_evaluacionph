import { Component, OnInit } from '@angular/core';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle } from '@ionic/angular/standalone'
import { frases } from 'src/assets/frases';


@Component({
  selector: 'app-card-home-cita',
  templateUrl: './card-home-cita.component.html',
  styleUrls: ['./card-home-cita.component.scss'],
  standalone: true,
  imports:[IonCard, IonCardContent, IonCardHeader, IonCardSubtitle]
})
export class CardHomeCitaComponent implements OnInit {

  ngOnInit() { }

  fraseActual: { frase: string; autor: string } = { frase: '', autor: '' };

  constructor() {
    this.obtenerFraseAleatoria()
  }

  obtenerFraseAleatoria() {
    const indiceAleatorio = Math.floor(Math.random() * frases.length);
    this.fraseActual = frases[indiceAleatorio];
  }



}
