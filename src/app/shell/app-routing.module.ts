import { NgModule } from '@angular/core';
import { Routes, Router, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/topicareas',
    pathMatch: 'full'
  },
  {
    path: 'topicareas',
    loadChildren: 'app/areas/topic-areas/topic-areas.module#TopicAreasModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true,
    preloadingStrategy: PreloadAllModules
  })],
  exports: [
    RouterModule
  ],
  providers: []
})

export class AppRoutingModule {
}
