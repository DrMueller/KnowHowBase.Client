import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

import { TopicAreaType } from '../../models';
import { TopicNavigationEntry } from '../../models/navigation';

@Injectable()
export class TopicNavigationService {

  constructor( @Inject(DOCUMENT) private document: any) { }

  public getTopicsByAreaType(topicAreaType: TopicAreaType): TopicNavigationEntry[] {
    const baseUrl = this.document.location.href;

    return [
      new TopicNavigationEntry('General', baseUrl, 1),
      new TopicNavigationEntry('T-SQL', baseUrl, 2),
      new TopicNavigationEntry('Oracle', baseUrl, 3),
      new TopicNavigationEntry('MongoDB', baseUrl, 4)
    ];
  }
}
