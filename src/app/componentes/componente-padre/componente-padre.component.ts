import { Component, OnInit } from '@angular/core';
import { FormCitasComponent } from '../form-citas/form-citas.component';
import { ListCitasComponent } from '../list-citas/list-citas.component';

@Component({
  selector: 'app-componente-padre',
  templateUrl: './componente-padre.component.html',
  styleUrls: ['./componente-padre.component.scss'],
  standalone: true,
  imports: [FormCitasComponent, ListCitasComponent]
})
export class ComponentePadreComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
