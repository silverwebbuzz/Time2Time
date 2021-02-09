import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageMembersPage } from './manage-members.page';

describe('ManageMembersPage', () => {
  let component: ManageMembersPage;
  let fixture: ComponentFixture<ManageMembersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageMembersPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageMembersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
