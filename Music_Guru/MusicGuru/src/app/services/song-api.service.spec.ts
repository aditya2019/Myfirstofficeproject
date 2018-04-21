import { TestBed, inject } from '@angular/core/testing';

import { SongApiService } from './song-api.service';

describe('SongApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SongApiService]
    });
  });

  it('should be created', inject([SongApiService], (service: SongApiService) => {
    expect(service).toBeTruthy();
  }));
});
