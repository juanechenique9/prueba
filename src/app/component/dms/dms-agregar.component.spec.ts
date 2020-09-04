import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DmsAgregarComponent } from './dms-agregar.component';

describe('DmsAgregarComponent', () => {
  let component: DmsAgregarComponent;
  let fixture: ComponentFixture<DmsAgregarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DmsAgregarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DmsAgregarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
