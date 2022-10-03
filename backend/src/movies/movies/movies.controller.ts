import { Controller, Get } from '@nestjs/common';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {
  constructor(private MoviesService: MoviesService) {}

    @Get()
    getMovies(){
        return this.MoviesService.getMovies
    }
    


}
