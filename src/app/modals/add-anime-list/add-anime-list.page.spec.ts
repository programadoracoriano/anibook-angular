import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddAnimeListPage } from './add-anime-list.page';

describe('AddAnimeListPage', () => {
  let component: AddAnimeListPage;
  let fixture: ComponentFixture<AddAnimeListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAnimeListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddAnimeListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
