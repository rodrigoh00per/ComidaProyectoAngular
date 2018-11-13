import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallecomidaComponent } from './detallecomida.component';

describe('DetallecomidaComponent', () => {
  let component: DetallecomidaComponent;
  let fixture: ComponentFixture<DetallecomidaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetallecomidaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallecomidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
