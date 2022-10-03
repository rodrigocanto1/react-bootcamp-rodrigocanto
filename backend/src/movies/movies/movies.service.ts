import { Injectable } from '@nestjs/common';
import * as movies from '../../mocks/movies.json'
@Injectable()
export class MoviesService {

getMovies(){
   return movies 
}

}
