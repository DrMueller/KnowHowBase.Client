import { Injectable } from '@angular/core';

import { KnowledgeDocument } from '../models';
import { TopicAreasHttpService } from '../services';

@Injectable()
export class KnowledgeDocumentService {

  constructor(private topicAreasHttpService: TopicAreasHttpService) { }

  public getKnowledgeDocumentAsync(id: number): Promise<KnowledgeDocument> {
    const kd = new KnowledgeDocument();

    kd.markdownText = `
    # New Project
    ng new Tra --ng4 --style=scss
    TSConfig --> "strictNullChecks": true
    TSConfig --> "mapRoot": "./",
    TSConfig --> "skipLibCheck": true
    angular-cli.json --> "styleExt": "scss"
    Check CLI Configuration from existing Project
    Check Packages in existing Project
    --> Font Awesome: https://github.com/angular/angular-cli/blob/master/docs/documentation/stories/include-font-awesome.md

    # 3rd Party
    ## General
    - If the CLI doesn't find the JS-Scripts, the error is thrown at runtime, the compiling with the d.ts will still work.
    - CLI seems only to look into the @types folder.

    ## JQuery
    https://www.gurustop.net/blog/2016/11/18/3821/jquery-angular2-angularcli-how-to
    `;

    return Promise.resolve(kd);
  };
}
