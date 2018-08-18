import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HttpClientModule } from '../../node_modules/@angular/common/http';
import { RaceListComponent } from './components/race-list/race-list.component';
import { HomeComponent } from './routes/home/home.component';
import { ChampionsComponent } from './routes/champions/champions.component';
import { PageNotFoundComponent } from './routes/page-not-found/page-not-found.component';
import { Routes, RouterModule } from '../../node_modules/@angular/router';
import { SelectboxComponent } from './components/selectbox/selectbox.component';
import { ResultListComponent } from './components/result-list/result-list.component';
import { PaginationComponent } from './components/pagination/pagination.component';

const routes: Routes = [
  { path: 'home',  component: HomeComponent},
  { path: 'champions/:year', component: ChampionsComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: '404', component: PageNotFoundComponent },
  { path: '**', component: PageNotFoundComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RaceListComponent,
    HomeComponent,
    ChampionsComponent,
    PageNotFoundComponent,
    SelectboxComponent,
    ResultListComponent,
    PaginationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
