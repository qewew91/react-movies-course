export interface IMovie {
  Title: string
  Year: string
  imdbID: string
  Type: MovieType
  Poster: string
}

export type SearchType = 'all' | MovieType

type MovieType = 'movie' | 'series'