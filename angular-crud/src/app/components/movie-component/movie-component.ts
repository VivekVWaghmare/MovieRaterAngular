import { Component } from '@angular/core';
import { TestService } from 'src/app/services/test.service';
import { Movie } from 'src/app/models/movie';
import { DatePipe } from '@angular/common'

@Component({
  selector: 'movie-copng build',
  templateUrl: './movie-component.html',
  styleUrls: ['./movie-component.css']
})
export class MovieComponent {
  title = 'angular-crud';
    heroes: [];
  constructor  (private movieService:  TestService, public datepipe: DatePipe){

  }

  ngOnInit() {
    this.getGenre();
    this.getMovies();
  }

  getGenre(){
      this.movieService.getGerne();
  }

  getMovies() {
     this.movieService.getMovies()
    .subscribe(a=>
        {
            console.log(a);
        }
    );
  }

  submitMovie(){
      console.log('submitMovie');
    var date = Date.now();
    let latest_date =this.datepipe.transform(date, 'yyyy-MM-dd');
    var dateString = new Date().toISOString();
     var movie: Movie ={
        name: 'movie2',
        genreId: 2,
        dateAdded: dateString,
        releaseDate: dateString,
        numberInStock: 15
      }
      console.log(movie);
      this.movieService.postMovie(movie)
  }

  updateMovie(){
    console.log('updateMovie');
    var date = Date.now();
    let latest_date =this.datepipe.transform(date, 'yyyy-MM-dd');
      let id: number = 10;
      let modelUpdate: Movie = {
        id: id,
        name: 'Tere Naam',
        genreId: 2,
        dateAdded: latest_date,
        releaseDate: latest_date,
        numberInStock: 15
      };
      this.movieService.updateMovie(id, modelUpdate);
      
  }

  deleteMovie(){
    let id: number = 10;
    let Id: number =15;
    console.log(id);
    this.movieService.deleteMovie(id);
  }
}
