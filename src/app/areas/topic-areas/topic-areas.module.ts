import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MarkdownToHtmlModule } from 'ng2-markdown-to-html';

import { TopicAreasRoutingModule } from './topic-areas-routing.module';
import * as comp from './components';
import * as navServ from './navigation/services';
import * as dataServ from './data/services';

@NgModule({
  imports: [
    CommonModule,
    TopicAreasRoutingModule,
    MarkdownToHtmlModule,
    FormsModule
  ],
  declarations: [
    comp.TopicAreaComponent,
    comp.TopicComponent,
    comp.KnowledgeDocumentComponent,
  ]
})
export class TopicAreasModule {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: TopicAreasModule,
      providers: [
        navServ.TopicAreaNavigationFactoryService,
        dataServ.KnowledgeDocumentService,
        dataServ.TopicAreasHttpService
      ]
    };
  }
}
