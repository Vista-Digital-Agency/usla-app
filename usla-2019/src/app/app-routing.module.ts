import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  { path: 'my-schedule', loadChildren: './my-schedule/my-schedule.module#MySchedulePageModule' },
  { path: 'settings', loadChildren: './settings/settings.module#SettingsPageModule' },
  { path: 'schedule', loadChildren: './schedule/schedule.module#SchedulePageModule' },
  { path: 'schedule-date', loadChildren: './schedule-date/schedule-date.module#ScheduleDatePageModule' },
  //{ path: 'results', loadChildren: './results/results.module#ResultsPageModule' },
  { path: 'result-types', loadChildren: './result-types/result-types.module#ResultTypesPageModule' },
  { path: 'program', loadChildren: './program/program.module#ProgramPageModule' },
  { path: 'party', loadChildren: './party/party.module#PartyPageModule' },
  { path: 'map', loadChildren: './map/map.module#MapPageModule' },
  { path: 'sponsors', loadChildren: './sponsors/sponsors.module#SponsorsPageModule' },
  { path: 'team-scoring', loadChildren: './team-scoring/team-scoring.module#TeamScoringPageModule' },
  { path: 'junior-guard-results', loadChildren: './junior-guard-results/junior-guard-results.module#JuniorGuardResultsPageModule' },
  { path: 'individual-points', loadChildren: './individual-points/individual-points.module#IndividualPointsPageModule' },
  { path: 'event-results', loadChildren: './event-results/event-results.module#EventResultsPageModule' },
  //{ path: 'event-modal', loadChildren: './event-modal/event-modal.module#EventModalPageModule' },
  { path: 'comp-search', loadChildren: './comp-search/comp-search.module#CompSearchPageModule' },
  { path: 'about', loadChildren: './about/about.module#AboutPageModule' },
  //{ path: 'sponsor-modal', loadChildren: './sponsor-modal/sponsor-modal.module#SponsorModalPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
