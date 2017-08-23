export class KnowledgeDocument {
  public markdownText: string | undefined = undefined;
  public id = 0;

  public static nullObject(): KnowledgeDocument {
    const result = new KnowledgeDocument();
    result.markdownText = '';
    return result;
  }
}
