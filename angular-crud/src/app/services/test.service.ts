import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Movie } from '../models/movie';

@Injectable({
  providedIn: 'root',
})
export class TestService {
    heros : [];
  constructor(private http: HttpClient) { }

    getGerne(){
        return this.http.get<any>('http://localhost:57914/api/Genres')
           .subscribe(data =>{
               console.log(data);
           });
    }

  getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>('http://localhost:57914/api/movies')
    //.map(console.log);
    }

    postMovie( model: Movie){
        if(model != null){
            console.log('postMovie');
            console.log(model);
            return this.http.post<Movie>('http://localhost:57914/api/movies', model)
            .subscribe(data => {
                console.log("POST Request is successful ", data);
                },
                error  => {
                
                console.log("Error", error);
                
                })
        }
        
        // .pipe(
        //     catchError(this.handleError)
        // );
    }
    
    //Update Movie
    updateMovie(id: number, model: Movie){
        console.log('updateMovie Service')
        if(id==0 || model == null){

         }
         else{
            console.log(id); 
            console.log(model);
             this.http.put('http://localhost:57914/api/movies/' + id, model)
             .subscribe(data =>{
                console.log("PUT Request is successful ", data);
             },
             error => {console.log("Error", error);}
             );
         }
    }

    deleteMovie( id: number){
        console.log('service: deleteMovie');
        console.log(id);
        if(id==0){

        }
        else{
            this.http.delete<number>('http://localhost:57914/api/movies/' + id)
            .subscribe(data => {
                console.log(data);
            });
        }
    }

    private handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
          // A client-side or network error occurred. Handle it accordingly.
          console.error('An error occurred:', error.error.message);
        } else {
          // The backend returned an unsuccessful response code.
          // The response body may contain clues as to what went wrong,
          console.error(
            `Backend returned code ${error.status}, ` +
            `body was: ${error.error}`);
        }
        // return an observable with a user-facing error message
        return throwError(
          'Something bad happened; please try again later.');
      }
}