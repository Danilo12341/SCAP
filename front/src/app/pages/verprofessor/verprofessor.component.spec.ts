import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerprofessorComponent } from './verprofessor.component';

describe('VerprofessorComponent', () => {
  let component: VerprofessorComponent;
  let fixture: ComponentFixture<VerprofessorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerprofessorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerprofessorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
