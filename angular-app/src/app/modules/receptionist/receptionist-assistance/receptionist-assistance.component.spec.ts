import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceptionistAssistanceComponent } from '../../../../assets/ts/receptionist-assistance.component';

describe('ReceptionistAssistanceComponent', () => {
  let component: ReceptionistAssistanceComponent;
  let fixture: ComponentFixture<ReceptionistAssistanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceptionistAssistanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceptionistAssistanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
