import { Controller, Get, Param, Query } from '@nestjs/common';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {
  constructor(private MoviesService: MoviesService) {}

  @Get()
  getMovies(@Query('title') title: string) {
    return this.MoviesService.getMovies(title);
  }

  @Get('/:id')
  getMoviesById(@Param('id') id: string) {
    return this.MoviesService.findById(id);
  }
}
