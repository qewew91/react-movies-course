import { IMovie } from '../types/movie.types'
import { FC } from 'react'

interface MovieProps {
  movie: IMovie
}

export const Movie: FC<MovieProps> = ({ movie }) => {
  return (
        <div className="card">
          <div className="card-image">
            <img src={movie.Poster} alt={movie.Title} />
          </div>
          <div className="card-content">
            <span className="card-title">{movie.Title}</span>
            <div className="card-action">
              <p>{movie.Year}</p>
              <p>{movie.Type}</p>
            </div>
          </div>
        </div>
  )
}