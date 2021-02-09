import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditWarehousePage } from './edit-warehouse.page';

describe('EditWarehousePage', () => {
  let component: EditWarehousePage;
  let fixture: ComponentFixture<EditWarehousePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditWarehousePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditWarehousePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
