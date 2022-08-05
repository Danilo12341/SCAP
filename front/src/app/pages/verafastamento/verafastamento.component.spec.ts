import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerafastamentoComponent } from './verafastamento.component';

describe('VerafastamentoComponent', () => {
  let component: VerafastamentoComponent;
  let fixture: ComponentFixture<VerafastamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerafastamentoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerafastamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
