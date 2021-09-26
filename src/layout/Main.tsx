import { ChangeEvent, MouseEvent, useEffect, useState } from 'react'
import env from 'react-dotenv'
import { ISearch } from '../types'
import { IMovie, SearchType } from '../types/movie.types'
import { Movies } from '../components/Movies'
import { useAxios } from '../hooks/axios.hook'
import { Search } from '../components/Search'
import { Preloader } from '../components/Preloader'

const API_KEY: string = env.API_KEY

export const Main = () => {
  const [searchValue, setSearchValue] = useState('')
  const [searchFilter, setSearchFilter] = useState<SearchType>('all')
  const [movies, setMovies] = useState<IMovie[]>([] as IMovie[])
  const { getRequest, loading } = useAxios<ISearch>()

  const searchMovies = (search = 'matrix', params = {}, headers = {}) => {
    getRequest(`http://omdbapi.com/?apikey=${API_KEY}&s=${search}`, params, headers)
      .then(response => setMovies(response.Search))
  }

  useEffect(searchMovies, [])

  const submitSearch = (e: MouseEvent<HTMLButtonElement>) => {
    if (searchValue !== '') {
      if (searchFilter === 'all') {
        searchMovies(searchValue)
      } else {
        searchMovies(searchValue, {
          type: searchFilter
        })
      }
    } else {
      searchMovies()
    }
  }

  const onChangeSearchValue = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value)
  }

  const changeFilter = (e: ChangeEvent<HTMLInputElement>) => {
    // @ts-ignore
    setSearchFilter(e.target.dataset.type)
  }

  const content = (
    <>
      <Movies movies={movies} />
    </>
  )


  return (
    <div className="container content">
      <Search
        searchValue={searchValue}
        submitSearch={submitSearch}
        onChangeSearchValue={onChangeSearchValue}
        searchFilter={searchFilter}
        changeFilter={changeFilter}
      />
      {loading ? <Preloader /> : content}
    </div>
  )
}