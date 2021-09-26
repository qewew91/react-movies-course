import { ChangeEvent, FC, MouseEvent } from 'react'
import { SearchType } from '../types/movie.types'

interface SearchProps {
  submitSearch: (e: MouseEvent<HTMLButtonElement>) => void
  onChangeSearchValue: (e: ChangeEvent<HTMLInputElement>) => void
  searchValue: string
  searchFilter: SearchType
  changeFilter: (e: ChangeEvent<HTMLInputElement>) => void
}

export const Search: FC<SearchProps> = ({ submitSearch, searchValue, onChangeSearchValue, searchFilter, changeFilter }) => {
  return (
      <div className="input-field">
        <input type="search" placeholder="Enter movie/series/game name" value={searchValue}
               onChange={onChangeSearchValue} />
        <button className="btn search-btn" type="submit" onClick={submitSearch}>Search</button>
        <label htmlFor="radio-all">
          <input
            type="radio"
            id="radio-all"
            className="gap"
            data-type="all"
            name="type"
            onChange={changeFilter}
            checked={searchFilter === 'all'}
          />
          <span>All</span>
        </label>
        <label htmlFor="radio-movie">
          <input
            type="radio"
            id="radio-movie"
            className="gap"
            data-type="movie"
            onChange={changeFilter}
            name="type"
            checked={searchFilter === 'movie'}
          />
          <span>Movies</span>
        </label>
        <label htmlFor="radio-series">
          <input
            id="radio-series"
            type="radio"
            className="gap"
            data-type="series"
            onChange={changeFilter}
            name="type"
            checked={searchFilter === 'series'}
          />
          <span>Series</span>
        </label>
      </div>
  )
}