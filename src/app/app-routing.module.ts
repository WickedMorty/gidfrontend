import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {SearchComponent} from './search/search.component';
import {ResidentialListComponent} from './residential-list/residential-list.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {ResidentialDetailComponent} from './residential-detail/residential-detail.component';
import {ResidentialHouseComponent} from './residential-house/residential-house.component';
import {LoginComponent} from './login/login.component';
import {AuthGuard} from './auth.guard';

const routes: Routes = [
  {
    path: '', redirectTo: '/login', pathMatch: 'full'
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'search',
    component: SearchComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'residential',
    component: ResidentialListComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'residential/:id',
    component: ResidentialDetailComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'house',
        component: ResidentialHouseComponent
      }
    ]
  },
  {
    path: '**',
    component: PageNotFoundComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

export const routingComponents = [SearchComponent,
  ResidentialListComponent,
  PageNotFoundComponent,
  ResidentialDetailComponent,
  ResidentialHouseComponent,
  LoginComponent];
