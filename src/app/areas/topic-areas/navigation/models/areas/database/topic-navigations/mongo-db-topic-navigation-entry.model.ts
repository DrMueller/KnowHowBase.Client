import { TopicNavigationEntryBase, KnowledgeDocumentNavigationEntry } from '../../..';


export class MongoDbTopicNavigationEntry extends TopicNavigationEntryBase {
  public get displayName() {
    return 'MongoDB';
  }

  public get knowledgeDocumentNavigationEntries(): KnowledgeDocumentNavigationEntry[] {
    return [
      new KnowledgeDocumentNavigationEntry(30, 'Stuff 1'),
      new KnowledgeDocumentNavigationEntry(31, 'Stuff 2'),
    ];
  }

  public readonly id = 4;
}
