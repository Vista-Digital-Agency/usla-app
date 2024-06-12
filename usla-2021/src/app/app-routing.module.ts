import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'event-modal',
    loadChildren: () => import('./event-modal/event-modal.module').then( m => m.EventModalPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'map',
    loadChildren: () => import('./map/map.module').then( m => m.MapPageModule)
  },
  {
    path: 'my-schedule',
    loadChildren: () => import('./my-schedule/my-schedule.module').then( m => m.MySchedulePageModule)
  },
  {
    path: 'party',
    loadChildren: () => import('./party/party.module').then( m => m.PartyPageModule)
  },
  {
    path: 'program',
    loadChildren: () => import('./program/program.module').then( m => m.ProgramPageModule)
  },
  {
    path: 'schedule',
    loadChildren: () => import('./schedule/schedule.module').then( m => m.SchedulePageModule)
  },
  {
    path: 'schedule-date',
    loadChildren: () => import('./schedule-date/schedule-date.module').then( m => m.ScheduleDatePageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./settings/settings.module').then( m => m.SettingsPageModule)
  },
  {
    path: 'sponsors',
    loadChildren: () => import('./sponsors/sponsors.module').then( m => m.SponsorsPageModule)
  },
  {
    path: 'sponsor-modal',
    loadChildren: () => import('./sponsor-modal/sponsor-modal.module').then( m => m.SponsorModalPageModule)
  },
  {
    path: 'travel',
    loadChildren: () => import('./travel/travel.module').then( m => m.TravelPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
