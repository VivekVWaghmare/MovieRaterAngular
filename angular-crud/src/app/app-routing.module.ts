import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieComponent } from './components/movie-component/movie-component';
import { HomeComponent } from './components/home-component/home-component';

const routes: Routes = [
  
  {path: 'home', component: HomeComponent},
  { path: 'movie', component : MovieComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
