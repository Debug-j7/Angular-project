import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayExerciceComponent } from './display-exercice.component';

describe('DisplayExerciceComponent', () => {
  let component: DisplayExerciceComponent;
  let fixture: ComponentFixture<DisplayExerciceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayExerciceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayExerciceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
