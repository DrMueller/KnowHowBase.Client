import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MarkdownModule } from 'angular2-markdown';

import { TopicAreasRoutingModule } from './topic-areas-routing.module';
import * as comp from './components';
import * as serv from './services';
import * as navServ from './services/navigation';

@NgModule({
  imports: [
    CommonModule,
    TopicAreasRoutingModule,
    MarkdownModule
  ],
  declarations: [
    comp.TopicAreaComponent,
    comp.TopicComponent,
    comp.KnowledgeDocumentComponent
  ],
  providers: [
    navServ.KnowledgeDocumentNavigationService,
    navServ.TopicNavigationService,
    serv.KnowledgeDocumentService,
    serv.TopicAreasHttpService
  ]
})
export class TopicAreasModule { }
