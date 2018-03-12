import { TestBed, inject } from '@angular/core/testing';

import { ChatHistoryService } from './chat-history.service';

describe('ChatHistoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChatHistoryService]
    });
  });

  it('should be created', inject([ChatHistoryService], (service: ChatHistoryService) => {
    expect(service).toBeTruthy();
  }));
});
