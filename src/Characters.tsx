import React from 'react';
import { useState } from 'react';
import { people } from './query';
import {
    useQuery,
    gql
} from "@apollo/client";

const AllCharacters: React.FC = () => {

    // interface isLoadingState {
    //     isLoading: boolean;
    //     setIsLoading: React.Dispatch<React.SetStateAction<undefined>>;
    //   }

    const initialState = { isloading: Boolean }
    const [isLoading, setIsLoading] = useState(initialState);
    const { loading, error, data } = useQuery(people)
    //const { isLoading, setIsLoading }: isLoadingState = useState()
    console.log("people===== ", people);

    interface Character {
        name: string;
        birthYear: string;
        gender: string;
    }

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    let char: Character;
    const handleSearch = (searchTerm: string) => {
        char = data.allPeople.people.find((p: Character) => p.name === searchTerm)
        setIsLoading(false);
    }

    console.log('data CHARS---->>', data.allPeople.people)
    if (!isLoading) return (
        <div>
            <h3>{char.name}</h3>
        </div>
    )
    // <div> {companies.map(comp => (<div key={comp.handle}> <CompanyCard company={comp} /></div>)
    // return data.allFilms.films.map(({ title, id, director }: { title: string, id: string, director: string }) => (
    //     <div key={id}>
    //         <p>{`${title}: Directed by ${director}`}</p>
    //     </div>
    // ));
}
export default AllCharacters;
