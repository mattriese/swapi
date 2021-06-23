
import './App.css';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider
} from "@apollo/client";
import AllMovies from "./AllMovies";
import AllCharacters from './Characters';

const client = new ApolloClient({
  uri: "http://localhost:57556",
  cache: new InMemoryCache()
});


const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <AllMovies />
        <AllCharacters/>
      </div>
    </ApolloProvider>

  );
}

export default App;
