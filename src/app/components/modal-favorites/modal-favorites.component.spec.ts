import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalFavoritesComponent } from './modal-favorites.component';

describe('ModalFavoritesComponent', () => {
  let component: ModalFavoritesComponent;
  let fixture: ComponentFixture<ModalFavoritesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalFavoritesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalFavoritesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
