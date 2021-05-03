import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CreateCustomListPage } from './create-custom-list.page';

describe('CreateCustomListPage', () => {
  let component: CreateCustomListPage;
  let fixture: ComponentFixture<CreateCustomListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateCustomListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CreateCustomListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
