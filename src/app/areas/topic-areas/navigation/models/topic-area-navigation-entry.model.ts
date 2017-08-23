import { TopicNavigationEntryBase } from '.';

declare var window;

export abstract class TopicAreaNavigationEntry {
  public abstract get topicNavigationEntries(): TopicNavigationEntryBase[];
  public abstract get displayName(): string;
  public get url(): string {
    return `/${this.id}`;
  }

  public abstract get id(): number;

  protected getBaseUrl(): string {
    const basePath = window.location.href;
    return basePath;
  }
}
