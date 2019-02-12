import { Injectable } from '@angular/core';

import { Movie } from '../models/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private movies: Movie[];

  constructor() { }

  addMovies () {
    this.movies = [
      {
        id: 1,
        poster:     '21961-cartaz.jpg',
        title:      'Uma Aventura Lego 2',
        synopsis:   `O filme reúne os heróis de Bricksburg em uma aventura inédita e repleta de ação
                     para salvar sua adorada cidade.`,
        genres:   [
          'Animação'
        ],
        rating: 'L',
        schedules: [
          {
            weekDays:     [ 'Qui', 'Sex', 'Seg', 'Ter' ],
            time:         ['16h30'],
            is3D:         false,
            isSubtitled:  false,
          },
          {
            weekDays:     [ 'Sáb', 'Dom', 'Qua' ],
            time:         ['14h'],
            is3D:         false,
            isSubtitled:  false,
          },
        ]
      },
      {
        id: 2,
        poster:       '21959-cartaz.jpg',
        title:        'Como Treinar seu Dragão 3',
        synopsis:     `De DreamWorks Animation, está chegando um capítulo surpreendente sobre crescimento,
                       sobre encontrar a coragem para enfrentar o desconhecido.`,
        genres: [
          'Animação',
          'Aventura',
        ],
        rating: 'L',
        schedules: [
          {
            weekDays:     [ 'Qui', 'Sab', 'Dom' ],
            time:         [ '17h30' ],
            is3D:         false,
            isSubtitled:  false,
          },
          {
            weekDays:     [ 'Seg', 'Ter', 'Qua' ],
            time:         [ '15h' ],
            is3D:         true,
            isSubtitled:  true,
          }
        ]
      },
    ];
  }

  getMovies () {
    return this.movies;
  }
}
