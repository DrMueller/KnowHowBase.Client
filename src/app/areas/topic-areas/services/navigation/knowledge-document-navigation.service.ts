import { Injectable } from '@angular/core';

import { KnowledgeDocumentNavigationEntry } from '../../models/navigation';

@Injectable()
export class KnowledgeDocumentNavigationService {

  constructor() { }

  public getNavigationEntriesByTopicId(topicId: number): KnowledgeDocumentNavigationEntry[] {
    const result = [
      new KnowledgeDocumentNavigationEntry(1, 'tra', 1),
      new KnowledgeDocumentNavigationEntry(2, 'tra2', 2)
    ];

    return result;
  }
}
