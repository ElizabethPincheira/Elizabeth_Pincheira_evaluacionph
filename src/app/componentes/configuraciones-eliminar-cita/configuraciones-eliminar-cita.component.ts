import { Component, OnInit } from '@angular/core';
import { IonToggle, IonItem, IonLabel} from '@ionic/angular/standalone'

@Component({
  selector: 'app-configuraciones-eliminar-cita',
  templateUrl: './configuraciones-eliminar-cita.component.html',
  styleUrls: ['./configuraciones-eliminar-cita.component.scss'],
  standalone:true,
  imports:[IonToggle, IonItem, IonLabel]
})
export class ConfiguracionesEliminarCitaComponent  implements OnInit {

  constructor() { }

  isActivado = false;

  ngOnInit() {}

}

