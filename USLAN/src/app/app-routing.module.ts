import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

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
  { path: 'about', loadChildren: './about/about.module#AboutPageModule' },
  { path: 'comp-search', loadChildren: './comp-search/comp-search.module#CompSearchPageModule' },
  { path: 'event-modal', loadChildren: './event-modal/event-modal.module#EventModalPageModule' },
  { path: 'event-results', loadChildren: './event-results/event-results.module#EventResultsPageModule' },
  { path: 'individual-points', loadChildren: './individual-points/individual-points.module#IndividualPointsPageModule' },
  { path: 'junior-guard-results', loadChildren: './junior-guard-results/junior-guard-results.module#JuniorGuardResultsPageModule' },
  { path: 'map', loadChildren: './map/map.module#MapPageModule' },
  { path: 'my-schedule', loadChildren: './my-schedule/my-schedule.module#MySchedulePageModule' },
  { path: 'party', loadChildren: './party/party.module#PartyPageModule' },
  { path: 'program', loadChildren: './program/program.module#ProgramPageModule' },
  { path: 'result-types', loadChildren: './result-types/result-types.module#ResultTypesPageModule' },
  { path: 'results', loadChildren: './results/results.module#ResultsPageModule' },
  { path: 'schedule', loadChildren: './schedule/schedule.module#SchedulePageModule' },
  { path: 'schedule-date/:date', loadChildren: './schedule-date/schedule-date.module#ScheduleDatePageModule' },
  { path: 'settings', loadChildren: './settings/settings.module#SettingsPageModule' },
  { path: 'sponsors', loadChildren: './sponsors/sponsors.module#SponsorsPageModule' },
  { path: 'team-scoring', loadChildren: './team-scoring/team-scoring.module#TeamScoringPageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
