import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BrandsProductPage } from './brands-product.page';

describe('BrandsProductPage', () => {
  let component: BrandsProductPage;
  let fixture: ComponentFixture<BrandsProductPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrandsProductPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BrandsProductPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
