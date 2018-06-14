import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {SearchComponent} from "./search/search.component";
import {ResidentialListComponent} from "./residential-list/residential-list.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {ResidentialDetailComponent} from "./residential-detail/residential-detail.component";

const routes: Routes = [
  {path: '', redirectTo: '/residential', pathMatch: 'full'},
  {path: 'search', component: SearchComponent},
  {path: 'residential', component: ResidentialListComponent},
  {path: 'residential/:id', component: ResidentialDetailComponent},
  {path: '**', component: PageNotFoundComponent }
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
  ResidentialDetailComponent];
