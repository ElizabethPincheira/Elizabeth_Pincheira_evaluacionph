import { Component, OnInit } from '@angular/core';
import { FormCitasComponent } from '../form-citas/form-citas.component';
import { ListCitasComponent } from '../list-citas/list-citas.component';
import { CitaService } from 'src/app/servicio/cita.service';
import { Cita } from 'src/app/modelo/cita';

@Component({
  selector: 'app-componente-padre',
  templateUrl: './componente-padre.component.html',
  styleUrls: ['./componente-padre.component.scss'],
  standalone: true,
  imports: [FormCitasComponent, ListCitasComponent]
})
export class ComponentePadreComponent  implements OnInit {


  listacitas:Cita[] = []

  constructor(private citaService:CitaService ) { }

  ngOnInit(){
    this._actualizar()
  }


   private _actualizar(){
    this.listacitas=this.citaService.getCita()
   }

   onCreateCita($event: { frase : String ; autor :String }){
    const cita = new Cita($event.frase, $event.autor);
    this.citaService.agregarCita(cita);
    this.listacitas = this.citaService.getCita();
    this._actualizar();
  }
}


