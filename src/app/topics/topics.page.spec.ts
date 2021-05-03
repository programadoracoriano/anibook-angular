import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TopicsPage } from './topics.page';

describe('TopicsPage', () => {
  let component: TopicsPage;
  let fixture: ComponentFixture<TopicsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopicsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TopicsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
