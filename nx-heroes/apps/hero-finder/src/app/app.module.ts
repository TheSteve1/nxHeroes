import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AppComponent } from './app.component';
import { HeroSearchComponent } from './hero-search/hero-search.component';
import { MessagesComponent, InMemoryDataService } from '@nx-heroes/shared_heroes';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [AppComponent,
  DashboardComponent,
  HeroSearchComponent,
  MessagesComponent],

  imports: [BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
