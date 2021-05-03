import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MyreviewsPage } from './myreviews.page';

describe('MyreviewsPage', () => {
  let component: MyreviewsPage;
  let fixture: ComponentFixture<MyreviewsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyreviewsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MyreviewsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
