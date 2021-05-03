import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddAnimeFromDetailsPage } from './add-anime-from-details.page';

describe('AddAnimeFromDetailsPage', () => {
  let component: AddAnimeFromDetailsPage;
  let fixture: ComponentFixture<AddAnimeFromDetailsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAnimeFromDetailsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddAnimeFromDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
