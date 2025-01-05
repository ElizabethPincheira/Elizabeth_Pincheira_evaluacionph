import { Injectable } from '@angular/core';
import { Cita } from '../modelo/cita';

@Injectable({
  providedIn: 'root'
})
export class CitaService {

  private _cita:Cita[]=[

  ]

  constructor() { }

  agregarCita(c:Cita){
    this._cita.push(c)
  }

  getCita():Cita[]{
    return this._cita
  }

}
