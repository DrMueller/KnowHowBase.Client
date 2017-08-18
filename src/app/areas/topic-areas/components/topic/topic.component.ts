import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { KnowledgeDocumentNavigationService } from '../../services/navigation';
import { KnowledgeDocumentNavigationEntry } from '../../models/navigation';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.scss']
})
export class TopicComponent implements OnInit {
  public navigationEntries: KnowledgeDocumentNavigationEntry[] = [];
  public selectedKnowledgeDocumentId = 0;

  constructor(private route: ActivatedRoute, private knowledgeDocumentService: KnowledgeDocumentNavigationService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(f => {
      const routeTopicId = f.get('topicId')!;
      const topicId = parseInt(routeTopicId, 10);
      this.navigationEntries = this.knowledgeDocumentService.getNavigationEntriesByTopicId(topicId);
    });
  }

  public knowledgeDocumentSelected(id: number): void {
    this.selectedKnowledgeDocumentId = id;
  }
}
