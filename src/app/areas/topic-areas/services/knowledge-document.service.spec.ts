import { TestBed, inject } from '@angular/core/testing';

import { KnowledgeDocumentService } from './knowledge-document.service';

describe('KnowledgeDocumentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [KnowledgeDocumentService]
    });
  });

  it('should be created', inject([KnowledgeDocumentService], (service: KnowledgeDocumentService) => {
    expect(service).toBeTruthy();
  }));
});
