import { IMovie } from './movie.types'

export interface ISearch {
  totalResults: string
  Response: Response
  Search: IMovie[]
}

type Response = 'True' | 'False'
