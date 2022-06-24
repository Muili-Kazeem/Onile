import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { GameDetailsComponent } from './components/game-details/game-details.component';
import { GameSearchCompComponent } from './components/home/game-search-comp/game-search-comp.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent, children: [{ path: '', component: GameSearchCompComponent }]},
  {
    path:"search/:game-search",
    component: HomeComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: GameSearchCompComponent,
      },
    ]
  },
  { path:"details/:id", component: GameDetailsComponent },
  { path: '**', component: ErrorPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
