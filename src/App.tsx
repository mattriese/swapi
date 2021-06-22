// import React from 'react';
import './App.css';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql
} from "@apollo/client";
import AllMovies from "./AllMovies";

const client = new ApolloClient({
  uri: "http://localhost:57556",
  cache: new InMemoryCache()
});

// const client = () => {
//   return new ApolloClient({
//     uri: "http://localhost:57556"
//   })
// }


const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <AllMovies />
      </div>
    </ApolloProvider>

  );
}

export default App;
