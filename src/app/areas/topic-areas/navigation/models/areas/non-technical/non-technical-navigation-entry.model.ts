import { TopicAreaNavigationEntry, TopicNavigationEntryBase } from '../..';

import * as topicNav from './topic-navigations';

export class NonTechnicalNavigationEntry extends TopicAreaNavigationEntry {
  public static readonly ID = 5;

  public readonly displayName = '.Net';

  public get id(): number {
    return NonTechnicalNavigationEntry.ID;
  }

  public get topicNavigationEntries(): TopicNavigationEntryBase[] {
    return [
      new topicNav.GeneralTopicNavigationEntry()
    ]
  }
}
