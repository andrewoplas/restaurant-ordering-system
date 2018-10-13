import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OccupantLoginComponent } from './occupant-login.component';

describe('OccupantLoginComponent', () => {
  let component: OccupantLoginComponent;
  let fixture: ComponentFixture<OccupantLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OccupantLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OccupantLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
