import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonHeader, IonToolbar, IonTitle, IonButtons, IonButton, IonIcon, IonContent} from '@ionic/angular/standalone'
import { addIcons } from 'ionicons';
import { settingsOutline } from 'ionicons/icons'
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [ RouterModule, CommonModule, IonContent, IonHeader, IonToolbar, IonTitle, IonButtons, IonButton, IonIcon],
})
export class HomePage {

  constructor() {
    addIcons({settingsOutline})
  }

  ngOnInit() {
  }
}
