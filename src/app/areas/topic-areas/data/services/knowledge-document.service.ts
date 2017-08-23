import { Injectable } from '@angular/core';

import { ToastService } from 'app/common/core-services/toast';

import { KnowledgeDocument } from '../models';
import { TopicAreasHttpService } from '../services';

@Injectable()
export class KnowledgeDocumentService {

  constructor(private topicAreasHttpService: TopicAreasHttpService, private toastService: ToastService) { }

  public async saveKnowledgeDocumentAsync(knowledgeDocument: KnowledgeDocument): Promise<KnowledgeDocument> {
    const relativeUrl = 'KnowledgeDocuments';
    this.toastService.showInfoToast('Saving Document..');
    const result = await this.topicAreasHttpService.putAsync(relativeUrl, knowledgeDocument, KnowledgeDocument);
    this.toastService.showSuccessToast('Document saved.');

    return result;
  }

  public getKnowledgeDocumentAsync(id: number): Promise<KnowledgeDocument> {
    const relativeUrl = `KnowledgeDocuments/${id}`;
    this.toastService.showInfoToast('Loading Document..');
    const result = this.topicAreasHttpService.getAsync(relativeUrl, KnowledgeDocument);
    this.toastService.showSuccessToast('Document loaded.');

    return result;
  };
}
