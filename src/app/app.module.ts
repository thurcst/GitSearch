import { DataService } from './services/data.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { RepositoriesComponent } from './shared/repositories/repositories.component';
import { LoginComponent } from './views/login/login.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { NavigationComponent } from './views/navigation/navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { MatMenuModule } from '@angular/material/menu';
import { HttpClientModule } from '@angular/common/http';
import { SearchComponent } from './shared/search/search.component';
import { StoreModule } from '@ngrx/store';
import { LoadingComponent } from './views/loading/loading.component';
import { AuthModule } from '@auth0/auth0-angular';
import { SearchpageComponent } from './views/searchpage/searchpage.component';
import { InfoComponent } from './shared/info/info.component';
import { AboutComponent } from './views/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    RepositoriesComponent,
    LoginComponent,
    NavigationComponent,
    DashboardComponent,
    SearchComponent,
    LoadingComponent,
    SearchpageComponent,
    InfoComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    FormsModule,
    MatCardModule,
    MatGridListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    LayoutModule,
    MatSidenavModule,
    MatListModule,
    MatMenuModule,
    HttpClientModule,
    StoreModule.forRoot({}, {}),
    AuthModule.forRoot({
      domain: 'dev-arth.us.auth0.com',
      clientId: 'kG15OcSMqWFQL9zHGCwaMCeBhFWrJRDX',
      cacheLocation: 'localstorage',
      useRefreshTokens: true,
    }),
  ],
  providers: [DataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
