/* eslint-disable @typescript-eslint/no-explicit-any */
import { RequestInit } from 'next/dist/server/web/spec-extension/request'
import Cookies from 'js-cookie'

type RequestOptionsType = Omit<RequestInit, 'body'> & {
  method?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'
  body?: Record<string, any> | string
  headers?: Headers
  query?: Record<string, string | number | boolean>
  cache?: string
  includeAccessToken?: boolean
}

type DefaultOptions = {
  baseURL: string | undefined
  headers: {
    'Content-type': string
    Authorization?: string
  }
}

const defaultOptions: DefaultOptions = {
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
}

const toQueryString = (query: Record<string, any>): string => {
  const params = new URLSearchParams()
  Object.entries(query).forEach(([key, value]) => {
    if (value !== undefined && value !== null) {
      params.append(key, String(value))
    }
  })
  return `?${params.toString()}`
}

export const customFetcher =
  (defaultOptions: DefaultOptions) =>
  async (path: string, options: RequestOptionsType) => {
    const { headers, body, query, includeAccessToken, ...restOptions } = options

    let url = defaultOptions.baseURL + path
    if (query) {
      url += toQueryString(query)
    }

    let authorizationHeader = {}
    if (includeAccessToken) {
      const accessToken = Cookies.get('accessToken1')
      authorizationHeader = { Authorization: `Bearer ${accessToken}` }
    }

    const requestOptions: RequestInit = {
      method: options.method || 'GET',
      headers: new Headers({
        ...defaultOptions.headers,
        ...headers,
        ...authorizationHeader,
      }),
      ...restOptions,
    }

    if (body && typeof body === 'object') {
      requestOptions.body = JSON.stringify(body)
    } else if (typeof body === 'string') {
      requestOptions.body = body
    }

    try {
      const res = await fetch(url, requestOptions)

      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`)
      }

      const data = await res.json()
      return data
    } catch (error) {
      console.error(error)
      throw error
    }
  }

export const instance = customFetcher(defaultOptions)

export const createAuthorizedInstance = (token: string) => {
  const authorizedOptions: DefaultOptions = {
    ...defaultOptions,
    headers: {
      ...defaultOptions.headers,
      Authorization: `Bearer ${token}`,
    },
  }

  return customFetcher(authorizedOptions)
}
