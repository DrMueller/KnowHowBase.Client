import { TopicNavigationEntryBase, KnowledgeDocumentNavigationEntry } from '../../..';


export class SqlTopicNavigationEntry extends TopicNavigationEntryBase {
  public get displayName() {
    return 'SQL';
  }

  public get knowledgeDocumentNavigationEntries(): KnowledgeDocumentNavigationEntry[] {
    return [
      new KnowledgeDocumentNavigationEntry(10, 'Stuff 1'),
      new KnowledgeDocumentNavigationEntry(11, 'Stuff 2'),
    ];
  }

  public readonly id = 2;
}
