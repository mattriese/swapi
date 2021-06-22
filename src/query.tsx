
import {
    gql
} from "@apollo/client";

const films = gql`{
  allFilms {
    films {
      title
      episodeID
      director
      id
    }
  }
}`;


const people = gql`{
    allPeople {
        people {
            id
            name
            birthYear
            gender
            filmConnection {
                films {
                    title
                }
            }
        }
    }
}`;




export { films, people }