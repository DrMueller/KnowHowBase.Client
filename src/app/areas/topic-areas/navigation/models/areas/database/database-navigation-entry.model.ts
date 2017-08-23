import { TopicAreaNavigationEntry, TopicNavigationEntryBase } from '../..';

import * as topicNav from './topic-navigations';


export class DatabaseNavigationEntry extends TopicAreaNavigationEntry {
  public static readonly ID = 1;

  public readonly displayName = 'Database';

  public get id(): number {
    return DatabaseNavigationEntry.ID;
  }

  public get topicNavigationEntries(): TopicNavigationEntryBase[] {
    return [
      new topicNav.GeneralTopicNavigationEntry(),
      new topicNav.SqlTopicNavigationEntry(),
      new topicNav.OracleTopicNavigationEntry(),
      new topicNav.MongoDbTopicNavigationEntry()
    ]
  }
}
