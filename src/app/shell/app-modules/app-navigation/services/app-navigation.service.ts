import { Injectable } from '@angular/core';

import { EnumUtilities } from 'app/common/utilities';
import { TopicAreaNavigationFactoryService } from 'app/areas/topic-areas/navigation';
import { AppNavigationEntry } from '../models';

@Injectable()
export class AppNavigationService {

  constructor(private topicAreaNavigationFactory: TopicAreaNavigationFactoryService) { }

  public getNavigationEntries(): AppNavigationEntry[] {
    const result = new Array<AppNavigationEntry>();
    this.appendTopicAreas(result);

    return result;
  }

  private appendTopicAreas(navigationEntries: Array<AppNavigationEntry>): void {
    const topicEntries = this.topicAreaNavigationFactory.createAll();

    topicEntries.forEach(f => {
      navigationEntries.push(new AppNavigationEntry(f.displayName, f.url));
    });
  }
}

