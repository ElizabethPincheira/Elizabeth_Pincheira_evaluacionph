import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ConfiguracionesEliminarCitaComponent } from './configuraciones-eliminar-cita.component';

describe('ConfiguracionesEliminarCitaComponent', () => {
  let component: ConfiguracionesEliminarCitaComponent;
  let fixture: ComponentFixture<ConfiguracionesEliminarCitaComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfiguracionesEliminarCitaComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ConfiguracionesEliminarCitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
