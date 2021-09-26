import { IMovie } from '../types/movie.types'
import { FC } from 'react'
import { Movie } from './Movie'

interface MoviesProps {
  movies: IMovie[]
}

export const Movies: FC<MoviesProps> = ({ movies }) => {
  return (
    <div className="movies">
      {movies.map(movie => <Movie movie={movie} key={movie.imdbID} />)}
    </div>
  )
}