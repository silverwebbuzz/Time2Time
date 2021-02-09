import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WarehouseTransferPage } from './warehouse-transfer.page';

describe('WarehouseTransferPage', () => {
  let component: WarehouseTransferPage;
  let fixture: ComponentFixture<WarehouseTransferPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WarehouseTransferPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WarehouseTransferPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
