import { Component, OnInit, Input } from '@angular/core';

import { Movie } from 'src/app/models/movie';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
  private readonly ADDRESS_POSTERS = '/assets/posters/';
  private readonly ICON_3D = '/assets/svgs/glasses.svg';

  private is3D: boolean;

  @Input() movie: Movie;

  constructor() { }

  ngOnInit() {
    this.getIs3D(this.movie.schedules);
  }

  getIs3D (schedules) {
    schedules.forEach(el => {
      if (el.is3D) {
        this.is3D = true;
      }
    });
  }

}
