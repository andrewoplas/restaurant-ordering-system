import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OccupantMenuComponent } from '../../../../assets/ts/occupant-menu.component';

describe('OccupantMenuComponent', () => {
  let component: OccupantMenuComponent;
  let fixture: ComponentFixture<OccupantMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OccupantMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OccupantMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
