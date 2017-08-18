import { NgModule } from '@angular/core';
import { Routes, Router, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: 'app/areas/home/home.module#HomeModule'
  },
  {
    path: 'playground',
    loadChildren: 'app/areas/playground/playground.module#PlaygroundModule'
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
