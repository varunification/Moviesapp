import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../services/movieservice';
import { Movie } from '../model/Movie'; // Assuming you have a Movie interface
import { HeaderComponent} from '../header/header.component';
import { StarRatingComponent } from '../feature/star-rating/star-rating.component';


@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
  standalone:true,
  imports: [StarRatingComponent, CommonModule, HeaderComponent],
})
export class MovieComponent implements OnInit {
Number(arg0: number|undefined): number {
return Number(arg0);
}
  type = '';
  id = '';
  movie: Movie | null = null; // Assuming you have a Movie type

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService
  ) {}

  ngOnInit(): void {
    this.type = this.route.snapshot.params['type'];
    this.id = this.route.snapshot.params['id'];
    this.getMovie();
  }

  // Fetch the movie using the MovieService
  getMovie(): void {
    this.movieService.getMovieById(Number(this.id)).subscribe(
      (data: Movie) => {
        this.movie = data; // Assign movie data to the component property
      },
      (error) => {
        console.error('Error fetching movie:', error); // Log or handle error
      }
    );
  }
}
