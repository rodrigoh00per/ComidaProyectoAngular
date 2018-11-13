import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarplatilloComponent } from './registrarplatillo.component';

describe('RegistrarplatilloComponent', () => {
  let component: RegistrarplatilloComponent;
  let fixture: ComponentFixture<RegistrarplatilloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrarplatilloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarplatilloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
