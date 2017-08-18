import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import * as comp from './components';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: ':topicAreaTypeName', component: comp.TopicAreaComponent, children: [
          { path: ':topicId', component: comp.TopicComponent }
        ]
      }
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class TopicAreasRoutingModule { }
