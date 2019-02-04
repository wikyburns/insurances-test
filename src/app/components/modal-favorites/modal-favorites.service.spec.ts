import { TestBed } from '@angular/core/testing';

import { ModalFavoritesService } from './modal-favorites.service';

describe('ModalFavoritesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ModalFavoritesService = TestBed.get(ModalFavoritesService);
    expect(service).toBeTruthy();
  });
});
