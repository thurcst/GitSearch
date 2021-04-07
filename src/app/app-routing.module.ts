import { AboutComponent } from './views/about/about.component';
import { SearchpageComponent } from './views/searchpage/searchpage.component';
import { LoadingComponent } from './views/loading/loading.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './views/dashboard/dashboard.component';
import { LoginComponent } from './views/login/login.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'login/github', component: LoadingComponent },
  { path: '', component: DashboardComponent },
  { path: 'search', component: SearchpageComponent },
  { path: 'about', component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
