import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RandomizerPage } from './randomizer.page';

describe('RandomizerPage', () => {
  let component: RandomizerPage;
  let fixture: ComponentFixture<RandomizerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RandomizerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RandomizerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
