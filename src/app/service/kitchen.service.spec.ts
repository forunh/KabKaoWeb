import { TestBed, inject } from '@angular/core/testing';

import { KitchenService } from './kitchen.service';

describe('KitchenService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [KitchenService]
    });
  });

  it('should ...', inject([KitchenService], (service: KitchenService) => {
    expect(service).toBeTruthy();
  }));
});
