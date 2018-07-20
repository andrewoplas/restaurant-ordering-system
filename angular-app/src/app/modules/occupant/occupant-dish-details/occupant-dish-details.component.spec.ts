import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OccupantDishDetailsComponent } from '../../../../assets/ts/occupant-dish-details.component';

describe('OccupantDishDetailsComponent', () => {
  let component: OccupantDishDetailsComponent;
  let fixture: ComponentFixture<OccupantDishDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OccupantDishDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OccupantDishDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
