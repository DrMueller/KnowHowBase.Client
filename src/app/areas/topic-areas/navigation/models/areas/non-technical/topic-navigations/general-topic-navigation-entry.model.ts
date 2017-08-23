import { TopicNavigationEntryBase, KnowledgeDocumentNavigationEntry } from '../../..';

export class GeneralTopicNavigationEntry extends TopicNavigationEntryBase {
  public get displayName() {
    return 'General';
  }

  public get knowledgeDocumentNavigationEntries(): KnowledgeDocumentNavigationEntry[] {
    return [
      new KnowledgeDocumentNavigationEntry(400, 'Test 1'),
      new KnowledgeDocumentNavigationEntry(401, 'Test2 2'),
    ];
  }

  public readonly id = 40;
}
