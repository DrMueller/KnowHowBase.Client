import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { TopicNavigationService } from '../../services/navigation';
import { TopicNavigationEntry } from '../../models/navigation';
import { TopicAreaType } from '../../models';

@Component({
  selector: 'app-topic-area',
  templateUrl: './topic-area.component.html',
  styleUrls: ['./topic-area.component.scss']
})
export class TopicAreaComponent implements OnInit {

  public navigationEntries: TopicNavigationEntry[] = [];

  constructor(private topicNavigationService: TopicNavigationService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(f => {
      const topicAreaTypeName = f.get('topicAreaTypeName')!;
      const topicAreaType = TopicAreaType[topicAreaTypeName];
      this.navigationEntries = this.topicNavigationService.getTopicsByAreaType(topicAreaType);
    });
  }
}
