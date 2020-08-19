import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrupoAgregarComponent } from './grupo-agregar.component';

describe('GrupoAgregarComponent', () => {
  let component: GrupoAgregarComponent;
  let fixture: ComponentFixture<GrupoAgregarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrupoAgregarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrupoAgregarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
