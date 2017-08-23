import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RouteConstants } from './route-constants';
import * as comp from './components';

export const paramTopicAreaId = RouteConstants.PARAM_TOPIC_AREA_ID;
export const paramTopicId = RouteConstants.PARAM_TOPIC_ID;

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: `:${paramTopicAreaId}`, component: comp.TopicAreaComponent, children: [
          { path: `:${paramTopicId}`, component: comp.TopicComponent }
        ]
      }
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class TopicAreasRoutingModule { }
