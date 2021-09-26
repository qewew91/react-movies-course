import axios from 'axios'
import { useState } from 'react'

export const useAxios = <T>() => {
  const [loading, setLoading] = useState(false)
  const getRequest = async (url: string, params?: any, headers?: any) => {
    setLoading(true)
    const response = await axios.get<T>(url, {
      params: params ?? '', headers: headers ?? ''
    })
    setLoading(false)
    return response.data
  }

  return { getRequest, loading }
}