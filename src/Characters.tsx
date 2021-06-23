import React from 'react';
import { useState } from 'react';
import { people } from './query';
import {
    useQuery,
    gql
} from "@apollo/client";
import SearchForm from './SearchForm';

const AllCharacters: React.FC = () => {

    interface Character {
        name: string;
        birthYear: string;
        gender: string;
    }

    const [ char, setChar ] = useState<Character | null>(null);
    const { loading, error, data } = useQuery(people);

    type Props = {
        handleSearch: (searchTerm: string) => void;
    }
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    //let char: Character;
    const handleSearch = (searchTerm: string): void => {
        setChar(data.allPeople.people.find((p: Character) => p.name === searchTerm))
        console.log("char=== ", char);
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
