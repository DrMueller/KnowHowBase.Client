import { TopicNavigationEntryBase, KnowledgeDocumentNavigationEntry } from '../../..';


export class OracleTopicNavigationEntry extends TopicNavigationEntryBase {
  public get displayName() {
    return 'Oracle';
  }

  public get knowledgeDocumentNavigationEntries(): KnowledgeDocumentNavigationEntry[] {
    return [
      new KnowledgeDocumentNavigationEntry(20, 'Stuff 1'),
      new KnowledgeDocumentNavigationEntry(21, 'Stuff 2'),
    ];
  }

  public readonly id = 3;
}
