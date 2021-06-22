
import './App.css';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider
} from "@apollo/client";
import AllMovies from "./AllMovies";

const client = new ApolloClient({
  uri: "http://localhost:52741",
  cache: new InMemoryCache()
});


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
