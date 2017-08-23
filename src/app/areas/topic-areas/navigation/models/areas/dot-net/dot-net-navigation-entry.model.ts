import { TopicAreaNavigationEntry, TopicNavigationEntryBase } from '../..';

import * as topicNav from './topic-navigations';


export class DotNetNavigationEntry extends TopicAreaNavigationEntry {
  public static readonly ID = 2;

  public readonly displayName = '.Net';

  public get id(): number {
    return DotNetNavigationEntry.ID;
  }

  public get topicNavigationEntries(): TopicNavigationEntryBase[] {
    return [
      new topicNav.GeneralTopicNavigationEntry()
    ]
  }
}
