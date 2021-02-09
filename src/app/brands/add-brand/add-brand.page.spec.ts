import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddBrandPage } from './add-brand.page';

describe('AddBrandPage', () => {
  let component: AddBrandPage;
  let fixture: ComponentFixture<AddBrandPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddBrandPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddBrandPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
