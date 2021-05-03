import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddAnimeCustomListPage } from './add-anime-custom-list.page';

describe('AddAnimeCustomListPage', () => {
  let component: AddAnimeCustomListPage;
  let fixture: ComponentFixture<AddAnimeCustomListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAnimeCustomListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddAnimeCustomListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
