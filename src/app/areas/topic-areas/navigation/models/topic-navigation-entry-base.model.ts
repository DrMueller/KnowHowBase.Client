import { KnowledgeDocumentNavigationEntry } from '.';

export abstract class TopicNavigationEntryBase {
  public abstract get displayName(): string;
  public abstract get knowledgeDocumentNavigationEntries(): KnowledgeDocumentNavigationEntry[];

  public abstract get id(): number;
}
