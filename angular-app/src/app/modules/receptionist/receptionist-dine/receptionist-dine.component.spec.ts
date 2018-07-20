import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceptionistDineComponent } from '../../../../assets/ts/receptionist-dine.component';

describe('ReceptionistDineComponent', () => {
  let component: ReceptionistDineComponent;
  let fixture: ComponentFixture<ReceptionistDineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceptionistDineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceptionistDineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
