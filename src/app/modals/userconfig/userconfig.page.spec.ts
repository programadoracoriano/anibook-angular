import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UserconfigPage } from './userconfig.page';

describe('UserconfigPage', () => {
  let component: UserconfigPage;
  let fixture: ComponentFixture<UserconfigPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserconfigPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UserconfigPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
