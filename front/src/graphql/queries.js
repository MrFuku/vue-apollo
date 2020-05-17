import gql from 'graphql-tag'

export const MOVIE_LIST = gql`
  query {
    movies {
      id
      name
      genre
      director {
        id
        name
      }
    }
  }
`

export const DIRECTOR_LIST = gql`
  query {
    directors {
      id
      name
      age
    }
  }
`
