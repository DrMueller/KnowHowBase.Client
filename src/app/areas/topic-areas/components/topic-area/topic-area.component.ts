import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { TopicAreaNavigationFactoryService, TopicNavigationEntryBase } from '../../navigation';
import { RouteConstants, } from '../..';

@Component({
  selector: 'app-topic-area',
  templateUrl: './topic-area.component.html',
  styleUrls: ['./topic-area.component.scss']
})
export class TopicAreaComponent implements OnInit {
  public navigationEntries: TopicNavigationEntryBase[] = [];

  constructor(private topicAreaNavigationFactory: TopicAreaNavigationFactoryService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(f => {
      const topicAreaId = parseInt(f.get(RouteConstants.PARAM_TOPIC_AREA_ID)!, 10);
      const topicAreaNavigationEntry = this.topicAreaNavigationFactory.createById(topicAreaId);
      this.navigationEntries = topicAreaNavigationEntry.topicNavigationEntries;
    });
  }
}
