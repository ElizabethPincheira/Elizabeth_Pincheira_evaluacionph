import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-citas',
  templateUrl: './form-citas.component.html',
  styleUrls: ['./form-citas.component.scss'],
  standalone: true,
  imports: [FormsModule]
})
export class FormCitasComponent  implements OnInit {
  fraseStr:string = '';
  autorStr:string = '';

  @Output() onCreate = new EventEmitter<{frase:string;autor:string}>()

  constructor() { }

  ngOnInit() {}

  onClick(){
    this.onCreate.emit({frase:this.fraseStr, autor:this.autorStr})
    this.fraseStr = '';
    this.autorStr = '';

  }

}
