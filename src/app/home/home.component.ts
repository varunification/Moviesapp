import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { MovieService } from '../services/movieservice';
import { Movie } from '../model/Movie';
import { moveMessagePortToContext } from 'worker_threads';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StarRatingComponent } from "../feature/star-rating/star-rating.component";
import { Router } from '@angular/router';
import { routes } from '../app.routes';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, CommonModule, NgbModule, StarRatingComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  movies?: Movie[]= []; // Store fetched movie data

  constructor(private movieService: MovieService, private router:Router) {}

  goToMovie(type:string, id:string){
    this.router.navigate(['movie', type, id]);

  }

  ngOnInit(): void {
    // Fetch movie data by ID

    for(let i=0;i<50;i++){
    this.movieService.getMovieById(i+1).subscribe({
      next: (data: Movie) => {
        this.movies?.push(data); // Assign data to the movie property
        //console.log(this.movies); // Debugging: Log movie data
      },
      error: (err) => {
        console.error('Error fetching movie:', err); // Handle API errors
      }
    });
  }
  }
}
