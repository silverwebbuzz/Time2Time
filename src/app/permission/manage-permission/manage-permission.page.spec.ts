import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagePermissionPage } from './manage-permission.page';

describe('ManagePermissionPage', () => {
  let component: ManagePermissionPage;
  let fixture: ComponentFixture<ManagePermissionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagePermissionPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagePermissionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
