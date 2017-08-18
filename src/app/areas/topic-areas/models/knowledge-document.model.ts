export class KnowledgeDocument {
  public markdownText: string | undefined = undefined;

  public static nullObject(): KnowledgeDocument {
    const result = new KnowledgeDocument();
    result.markdownText = '';
    return result;
  }
}
