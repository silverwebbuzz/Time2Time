import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPermissionPage } from './add-permission.page';

describe('AddPermissionPage', () => {
  let component: AddPermissionPage;
  let fixture: ComponentFixture<AddPermissionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPermissionPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPermissionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
