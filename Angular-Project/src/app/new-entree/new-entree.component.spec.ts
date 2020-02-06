import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewEntreeComponent } from './new-entree.component';

describe('NewEntreeComponent', () => {
  let component: NewEntreeComponent;
  let fixture: ComponentFixture<NewEntreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewEntreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewEntreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
