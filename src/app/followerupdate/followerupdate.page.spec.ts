import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FollowerupdatePage } from './followerupdate.page';

describe('FollowerupdatePage', () => {
  let component: FollowerupdatePage;
  let fixture: ComponentFixture<FollowerupdatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FollowerupdatePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FollowerupdatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
