import { TopicAreaNavigationEntry, TopicNavigationEntryBase } from '../..';

import * as topicNav from './topic-navigations';

export class DesignNavigationEntry extends TopicAreaNavigationEntry {
  public static readonly ID = 4;

  public readonly displayName = 'Design';

  public get id(): number {
    return DesignNavigationEntry.ID;
  }

  public get topicNavigationEntries(): TopicNavigationEntryBase[] {
    return [
      new topicNav.GeneralTopicNavigationEntry()
    ]
  }
}
