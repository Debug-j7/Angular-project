import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserInscComponent } from './user-insc.component';

describe('UserInscComponent', () => {
  let component: UserInscComponent;
  let fixture: ComponentFixture<UserInscComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserInscComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserInscComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
