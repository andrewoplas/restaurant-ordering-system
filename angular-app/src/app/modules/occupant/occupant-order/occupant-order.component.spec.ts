import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OccupantOrderComponent } from '../../../../assets/ts/occupant-order.component';

describe('OccupantOrderComponent', () => {
  let component: OccupantOrderComponent;
  let fixture: ComponentFixture<OccupantOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OccupantOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OccupantOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
