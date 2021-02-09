import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditBrandPage } from './edit-brand.page';

describe('EditBrandPage', () => {
  let component: EditBrandPage;
  let fixture: ComponentFixture<EditBrandPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditBrandPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditBrandPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
