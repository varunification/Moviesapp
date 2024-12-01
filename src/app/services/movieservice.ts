import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from '../model/Movie';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root',
})

export class MovieService {
    private baseUrl = environment.apiBaseUrl; 
    private token = environment.apiToken; 
    constructor(private http: HttpClient) {}
  
    // Fetch a movie by ID with Authorization header
    getMovieById(movieId: number): Observable<Movie> {
      const headers = new HttpHeaders({
        Authorization: `Bearer ${this.token}`,
      });
      return this.http.get<Movie>(`${this.baseUrl}/${movieId}`, { headers });
    }
  }
