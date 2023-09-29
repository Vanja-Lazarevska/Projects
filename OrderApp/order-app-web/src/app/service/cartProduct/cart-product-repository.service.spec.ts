import { TestBed } from '@angular/core/testing';

import { CartProductRepositoryService } from './cart-product-repository.service';

describe('CartProductRepositoryService', () => {
  let service: CartProductRepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartProductRepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
