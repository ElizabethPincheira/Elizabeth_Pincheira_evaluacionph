import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Cita } from 'src/app/modelo/cita';

@Component({
  selector: 'app-list-citas',
  templateUrl: './list-citas.component.html',
  styleUrls: ['./list-citas.component.scss'],
  standalone: true,
  imports: [CommonModule] 
})
export class ListCitasComponent  implements OnInit {

    @Input() citas:Cita[] = []

  constructor() { }

  ngOnInit() {}

}
