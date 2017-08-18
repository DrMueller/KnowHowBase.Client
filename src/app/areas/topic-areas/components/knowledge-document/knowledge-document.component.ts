import { Component, OnInit, Input } from '@angular/core';

import { KnowledgeDocumentService } from '../../services';
import { KnowledgeDocument } from '../../models';

@Component({
  selector: 'app-knowledge-document',
  templateUrl: './knowledge-document.component.html',
  styleUrls: ['./knowledge-document.component.scss']
})
export class KnowledgeDocumentComponent implements OnInit {
  public knowledgeDocument: KnowledgeDocument = KnowledgeDocument.nullObject();

  @Input() public set knowledgeDocumentId(value: number) {
    this.loadKnowledgeDocumentAsync(value);
  }

  constructor(private knowledgeDocumentService: KnowledgeDocumentService) { }

  ngOnInit() {
  }

  private async loadKnowledgeDocumentAsync(id: number): Promise<void> {
    this.knowledgeDocument = await this.knowledgeDocumentService.getKnowledgeDocumentAsync(id);

    const tra = this.knowledgeDocument.markdownText;
  }
}
