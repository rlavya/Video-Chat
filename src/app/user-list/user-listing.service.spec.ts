import { TestBed, inject } from '@angular/core/testing';

import { UserListingService } from './user-listing.service';

describe('UserListingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserListingService]
    });
  });

  it('should be created', inject([UserListingService], (service: UserListingService) => {
    expect(service).toBeTruthy();
  }));
});
