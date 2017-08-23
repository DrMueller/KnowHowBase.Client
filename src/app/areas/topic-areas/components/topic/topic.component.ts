import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { JsObjFactory } from 'app/common/utilities';

import { RouteConstants } from '../..';
import { KnowledgeDocumentService } from '../../data/services';
import { KnowledgeDocument } from '../../data/models';

import { TopicAreaNavigationFactoryService } from '../../navigation/services';
import { KnowledgeDocumentNavigationEntry } from '../../navigation/models';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.scss']
})
export class TopicComponent implements OnInit {
  public navigationEntries: KnowledgeDocumentNavigationEntry[] = [];

  private selectedDocumentCopy: KnowledgeDocument;
  public selectedDocument: KnowledgeDocument = KnowledgeDocument.nullObject();

  public editMode = false;

  constructor(
    private route: ActivatedRoute,
    private knowledgeDocumentService: KnowledgeDocumentService,
    private topicAreaNavigationFactory: TopicAreaNavigationFactoryService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(f => {
      const topicId = parseInt(f.get(RouteConstants.PARAM_TOPIC_ID)!, 10);
      const routeTopicAreaId = this.route.parent!.snapshot.paramMap.get(RouteConstants.PARAM_TOPIC_AREA_ID)!;
      const topicAreaid = parseInt(routeTopicAreaId, 10);

      const topicArea = this.topicAreaNavigationFactory.createById(topicAreaid);
      const topic = topicArea.topicNavigationEntries.find(nav => nav.id === topicId)!;

      this.navigationEntries = topic.knowledgeDocumentNavigationEntries;
    });
  }

  public async knowledgeDocumentSelected(id: number): Promise<void> {
    this.editMode = false;
    this.selectedDocument = await this.knowledgeDocumentService.getKnowledgeDocumentAsync(id);
    this.selectedDocumentCopy = JsObjFactory.create(this.selectedDocument, KnowledgeDocument);
  }

  public editKnowledgeDocumentClicked(): void {
    this.editMode = true;
  }

  public cancelClicked(): void {
    this.editMode = false;
    this.selectedDocument = this.selectedDocumentCopy;
  }

  public async saveClicked(): Promise<void> {
    this.editMode = false;
    this.selectedDocument = await this.knowledgeDocumentService.saveKnowledgeDocumentAsync(this.selectedDocument);
  }
}
