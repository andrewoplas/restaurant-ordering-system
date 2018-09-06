import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDisplayItemMenuComponent } from '../../../../assets/Admin/ts/admin-display-item-menu.component';

describe('AdminDisplayItemMenuComponent', () => {
  let component: AdminDisplayItemMenuComponent;
  let fixture: ComponentFixture<AdminDisplayItemMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminDisplayItemMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDisplayItemMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
