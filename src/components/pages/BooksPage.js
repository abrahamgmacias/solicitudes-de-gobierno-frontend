import { sampleRequest } from '../../requests/credentials';
import { selectToken } from '../../features/Login/tokenSlice';
import { getLibro } from '../../requests/apiCalls';
import SearchBar from "../UI/molecules/SearchBar"
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';


export default function BooksPage(props) {
    const [search, setSearch] = useState('');
    const [bookData, setBookData] = useState('');
    const token = useSelector(selectToken);

    // Call the API
    const searchButtonClick = () => {
        // Create the credentials and fetch data
        getLibro(
            sampleRequest(
                "POST",
                { nombre: search },
                token
            )
        )
        .then((res) => {
            setBookData(res);
        });
    }
    
    // Enable enter 
    const formPreventDefault = (e) => {
        e.preventDefault();
        if (e.key === 'Enter') {
            searchButtonClick();
        }
    }

    return (
        <div className="mt-4">
            <form onSubmit={formPreventDefault} onKeyUp={searchButtonClick}>
                <SearchBar
                    setState={setSearch}
                    onClick={searchButtonClick}
                />
            </form>

            {bookData ? <p>{JSON.stringify(bookData)}</p> : null}
        </div>
    ) 
}