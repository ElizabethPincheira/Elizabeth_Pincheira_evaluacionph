import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonHeader, IonToolbar, IonTitle, IonButtons, IonButton, IonIcon, IonContent, 
  IonFab, IonFabButton} from '@ionic/angular/standalone'
import { addIcons } from 'ionicons';
import { settingsOutline, add } from 'ionicons/icons'
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [ RouterModule, CommonModule, IonContent, IonHeader, IonToolbar, IonTitle, 
    IonButtons, IonButton, IonIcon, IonFab, IonFabButton],
})
export class HomePage {

  constructor() {
    addIcons({add,settingsOutline});
  }

  ngOnInit() {
  }
}


