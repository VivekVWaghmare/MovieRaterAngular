import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieComponent } from './components/movie-component/movie-component';
import { TestService } from './services/test.service';
import { HttpClientModule } from '@angular/common/http';
import { DatePipe } from '@angular/common'
import { HomeComponent } from './components/home-component/home-component';


@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [TestService, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
