import { Component, OnInit, Input } from '@angular/core';

import { KnowledgeDocumentService } from '../../data/services';
import { KnowledgeDocument } from '../../data/models';

@Component({
  selector: 'app-knowledge-document',
  templateUrl: './knowledge-document.component.html',
  styleUrls: ['./knowledge-document.component.scss']
})
export class KnowledgeDocumentComponent implements OnInit {

  public knowledgeDocument: KnowledgeDocument = KnowledgeDocument.nullObject();

  @Input() public editMode: boolean;

  @Input() public set document(value: KnowledgeDocument) {
    this.knowledgeDocument = value;
  }

  @Input() public set knowledgeDocumentId(value: number) {
    this.loadKnowledgeDocumentAsync(value);
  }

  constructor(private knowledgeDocumentService: KnowledgeDocumentService) { }

  ngOnInit() {
  }

  private async loadKnowledgeDocumentAsync(id: number): Promise<void> {
    this.knowledgeDocument = await this.knowledgeDocumentService.getKnowledgeDocumentAsync(id);
  }
}
