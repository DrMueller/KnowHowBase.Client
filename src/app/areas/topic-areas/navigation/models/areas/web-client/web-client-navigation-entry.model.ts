import { TopicAreaNavigationEntry, TopicNavigationEntryBase } from '../..';

import * as topicNav from './topic-navigations';

export class WebClientNavigationEntry extends TopicAreaNavigationEntry {
  public static readonly ID = 3;

  public readonly displayName = 'JS & Friends';

  public get id(): number {
    return WebClientNavigationEntry.ID;
  }

  public get topicNavigationEntries(): TopicNavigationEntryBase[] {
    return [
      new topicNav.GeneralTopicNavigationEntry()
    ]
  }
}
