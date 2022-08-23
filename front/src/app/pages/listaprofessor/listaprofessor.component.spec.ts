import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaprofessorComponent } from './listaprofessor.component';

describe('ListaprofessorComponent', () => {
  let component: ListaprofessorComponent;
  let fixture: ComponentFixture<ListaprofessorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaprofessorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaprofessorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
