import { Injectable } from '@nestjs/common';
import * as movies from '../../mocks/movies.json';


@Injectable()
export class MoviesService {
  getMovies(title = '') {
    return movies.filter((movie) =>
      movie.title.toLowerCase().trim().includes(title.toLowerCase().trim()),
    );
  }

  findById(id) {
    return movies.filter((movie) => movie.id == id);
  }
}
