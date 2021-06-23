import React from 'react';
import { films, people } from './query'
import {
    useQuery,
    gql
} from "@apollo/client";



const AllMovies: React.FC = () => {

    const { loading, error, data } = useQuery(films);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    console.log('data---->>', data.allFilms.films)
    // return<>hello</>
    // <div> {companies.map(comp => (<div key={comp.handle}> <CompanyCard company={comp} /></div>)
    return data.allFilms.films.map(({ title, id, director }: { title: string, id: string, director: string }) => (
        <div key={id}>
            <p>{`${title}: Directed by ${director}`}</p>
        </div>
    ));
}


export default AllMovies;
