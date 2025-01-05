import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componente-padre',
  templateUrl: './componente-padre.component.html',
  styleUrls: ['./componente-padre.component.scss'],
  standalone: true,
})
export class ComponentePadreComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
