import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuAdminModalComponent } from './menu-admin-modal.component';

describe('MenuAdminModalComponent', () => {
  let component: MenuAdminModalComponent;
  let fixture: ComponentFixture<MenuAdminModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuAdminModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuAdminModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
