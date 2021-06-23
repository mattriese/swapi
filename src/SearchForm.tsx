import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


/**
 * SearchForm component
 *
 * Props: handleSearch (function)
 * 				initialSearchTerm (string)
 *
 * State: searchTerm
 *
 * CompanyList / JobList -> SearchForm
 */
const SearchForm: React.FC = ({handleSearch}) => {
  const [searchTerm, setSearchTerm] = useState("");

  function handleChange(evt: React.ChangeEvent<HTMLInputElement>) {
    setSearchTerm(evt.target.value);
  }

  function handleSubmit(evt: React.FormEvent<HTMLInputElement>) {
    console.log('handleSubmit ran');
    console.log('searchTerm in handlesubmit= ', searchTerm);
    evt.preventDefault();

    handleSearch(searchTerm);

  }

  return (
    <div class="SearchForm">
      <Form inline onSubmit={handleSubmit}>
        <Form.Group class="FormInput">
          <Form.Label htmlFor="searchBox"></Form.Label>
          <Form.Control
            value={searchTerm}
            id="searchBox"
            type="text"
            placeholder="Search"
            onChange={handleChange}
          />
        </Form.Group>
        <Button variant="dark" className="SearchForm-Button">
          search
        </Button>
      </Form>
    </div>
  );
}

export default SearchForm;
