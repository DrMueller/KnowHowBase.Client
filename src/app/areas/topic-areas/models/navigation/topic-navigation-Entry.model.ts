export class TopicNavigationEntry {
  public get url(): string {
    const result = `${this.baseUrl}/${this.id}`;
    return result;
  }

  constructor(public displayName: string, public baseUrl: string, public id: number) {
  }
}

