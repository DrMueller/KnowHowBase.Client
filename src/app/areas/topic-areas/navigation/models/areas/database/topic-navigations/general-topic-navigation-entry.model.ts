import { TopicNavigationEntryBase, KnowledgeDocumentNavigationEntry } from '../../..';


export class GeneralTopicNavigationEntry extends TopicNavigationEntryBase {
  public get displayName() {
    return 'General';
  }

  public get knowledgeDocumentNavigationEntries(): KnowledgeDocumentNavigationEntry[] {
    return [
      new KnowledgeDocumentNavigationEntry(1, 'Stuff 1'),
      new KnowledgeDocumentNavigationEntry(2, 'Stuff 2'),
    ];
  }

  public readonly id = 1;
}
