import React from 'react';
//import { useQuery } from '@apollo/react-hooks';
//import { gql } from 'apollo-boost';
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    useQuery,
    gql
  } from "@apollo/client";
// import MovieCard from './Movie';

const query = gql`{
  allFilms {
    films {
      title
      episodeID
      directors
      id
    }
  }
}`;


const AllMovies: React.FC = () => {
  const { loading, error, data } = useQuery(query);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  console.log('data---->>', data.allFilms.films)
  // return<>hello</>
  // <div> {companies.map(comp => (<div key={comp.handle}> <CompanyCard company={comp} /></div>)
  return data.allFilms.films.map(({ title, id, director }: {title: string, id: string, director: string}) => (
    <div key={id}>
      <p>{`${title}: Directed by ${director}`}</p>
    </div>
  ));
}


export default AllMovies;
