import { Component, OnInit } from '@angular/core';

import { MovieService } from 'src/app/services/movie.service';
import { Movie } from 'src/app/models/movie';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  private movies: Movie[];

  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.movieService.addMovies();
    this.movies = this.movieService.getMovies();
  }

}
