import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StudioanimePage } from './studioanime.page';

describe('StudioanimePage', () => {
  let component: StudioanimePage;
  let fixture: ComponentFixture<StudioanimePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudioanimePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StudioanimePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
