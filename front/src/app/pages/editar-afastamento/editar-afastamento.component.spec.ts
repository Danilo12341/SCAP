import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarAfastamentoComponent } from './editar-afastamento.component';

describe('EditarAfastamentoComponent', () => {
  let component: EditarAfastamentoComponent;
  let fixture: ComponentFixture<EditarAfastamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarAfastamentoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarAfastamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
