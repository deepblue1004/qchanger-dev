import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavouritesMainComponent } from './favourites-main.component';

describe('FavouritesMainComponent', () => {
  let component: FavouritesMainComponent;
  let fixture: ComponentFixture<FavouritesMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavouritesMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavouritesMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
