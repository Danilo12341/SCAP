import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListafastamentoComponent } from './listafastamento.component';

describe('ListafastamentoComponent', () => {
  let component: ListafastamentoComponent;
  let fixture: ComponentFixture<ListafastamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListafastamentoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListafastamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
