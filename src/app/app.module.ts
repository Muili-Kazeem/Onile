import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchBarComponent } from './components/utils/search-bar/search-bar.component';
import { NotYetComponent } from './components/not-yet/not-yet.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { HomeComponent } from './components/home/home.component';
import { GameSearchCompComponent } from './components/home/game-search-comp/game-search-comp.component';
import { GameGenreComponent } from './components/home/game-genre/game-genre.component';
import { GameGenreCompComponent } from './components/home/game-genre-comp/game-genre-comp.component';
import { GameDetailsComponent } from './components/game-details/game-details.component';
import { FooterComponent } from './components/footer/footer.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpHeadersInterceptor } from './interceptors/http-headers.interceptor';
import { HttpErrorsInterceptor } from './interceptors/http-errors.interceptor';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from "@angular/material/icon";

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    NotYetComponent,
    NavBarComponent,
    HeroSectionComponent,
    HomeComponent,
    GameSearchCompComponent,
    GameGenreComponent,
    GameGenreCompComponent,
    GameDetailsComponent,
    FooterComponent,
    ErrorPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatIconModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpHeadersInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorsInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
