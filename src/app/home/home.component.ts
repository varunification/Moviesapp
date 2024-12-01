import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { MovieService } from '../services/movieservice';
import { Movie } from '../model/Movie';
import { moveMessagePortToContext } from 'worker_threads';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  movie?: Movie; // Store fetched movie data

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    // Fetch movie data by ID
    this.movieService.getMovieById(11).subscribe({
      next: (data: Movie) => {
        this.movie = data; // Assign data to the movie property
        console.log(this.movie); // Debugging: Log movie data
      },
      error: (err) => {
        console.error('Error fetching movie:', err); // Handle API errors
      }
    });
  }
}
