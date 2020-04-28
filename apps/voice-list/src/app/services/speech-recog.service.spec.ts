import { TestBed } from '@angular/core/testing';

import { SpeechRecogService } from './speech-recog.service';

describe('SpeechRecogService', () => {
  let service: SpeechRecogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpeechRecogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
