import { Injectable } from '@angular/core';

import { EnumUtilities } from 'app/common/utilities';
import { TopicAreaType } from 'app/areas/topic-areas';
import { AppNavigationEntry } from '../models';

@Injectable()
export class AppNavigationService {

  constructor() { }

  public getNavigationEntries(): AppNavigationEntry[] {
    let result = new Array<AppNavigationEntry>();

    result.push(new AppNavigationEntry('Home', '/home', 0));
    result.push(new AppNavigationEntry('Playground', '/playground', 1));

    this.appendTopicAreas(result);

    result = result.sort((a, b) => {
      return a.sequence - b.sequence;
    });

    return result;
  }

  private appendTopicAreas(navigationEntries: Array<AppNavigationEntry>): void {
    const topicAreaTypeNames = EnumUtilities.getNames(TopicAreaType);
    let cnter = 2;

    topicAreaTypeNames.forEach(f => {
      const url = `/topicareas/${f}`;

      navigationEntries.push(new AppNavigationEntry(f, url, cnter));
      cnter = cnter + 1;
    });
  }
}

