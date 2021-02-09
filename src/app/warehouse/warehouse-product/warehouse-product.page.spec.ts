import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WarehouseProductPage } from './warehouse-product.page';

describe('WarehouseProductPage', () => {
  let component: WarehouseProductPage;
  let fixture: ComponentFixture<WarehouseProductPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WarehouseProductPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WarehouseProductPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
