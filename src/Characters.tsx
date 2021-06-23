import React from 'react';
import { useState } from 'react';
import { people } from './query';
import {
    useQuery,
    gql
} from "@apollo/client";
import SearchForm from './SearchForm';

const AllCharacters: React.FC = () => {

    // interface isLoadingState {
    //     isLoading: boolean;
    //     setIsLoading: React.Dispatch<React.SetStateAction<undefined>>;
    //   }
    interface Character {
        name: string;
        birthYear: string;
        gender: string;
    }
    //const initialState = { isLoading: Boolean }
    //const initialChar: Character = { name: "", birthYear: "", gender: ""};
    //const [isLoading, setIsLoading] = useState<boolean>(true);
    const [ char, setChar ] = useState<Character | null>(null);
    const { loading, error, data } = useQuery(people);
    //const { isLoading, setIsLoading }: isLoadingState = useState()
    //console.log("people===== ", people);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    //let char: Character;
    const handleSearch = (searchTerm: string): void => {
        setChar(data.allPeople.people.find((p: Character) => p.name === searchTerm))
        //setIsLoading(false);
    }

    console.log('data CHARS---->>', data.allPeople.people)
    return (
        <div>
            <SearchForm handleSearch={handleSearch} />

            {char && <div>
                <h3>{char.name}</h3>
                <p>Born: {char.birthYear}</p>
                <p>Gender: {char.gender}</p>
            </div>
            }

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
