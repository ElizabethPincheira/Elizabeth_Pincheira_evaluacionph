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




//   isActivado = false;

//   constructor(private storage: Storage) { }

//   async ngOnInit() {
//     const sto = await this.storage.obtener("preferencia");
//     this.isActivado = (sto.value === "true");
//   }

//   async guardarPreferencia(event: any) {
//     this.isActivado = event.detail.checked;
//     console.log("Guardar preferencia:", this.isActivado);
//     this.isActivado ? await this.storage.guardar("preferencia", "true") : await this.storage.guardar("preferencia", "false")
//   }

// }
