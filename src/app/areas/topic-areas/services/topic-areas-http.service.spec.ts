import { TestBed, inject } from '@angular/core/testing';

import { TopicAreasHttpService } from './topic-areas-http.service';

describe('TopicAreasHttpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TopicAreasHttpService]
    });
  });

  it('should be created', inject([TopicAreasHttpService], (service: TopicAreasHttpService) => {
    expect(service).toBeTruthy();
  }));
});
