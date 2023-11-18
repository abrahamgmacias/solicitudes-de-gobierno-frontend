import SearchBar from "../UI/molecules/SearchBar"
import { useState, useEffect } from 'react';


export default function BooksPage(props) {
    const [search, setSearch] = useState('');    

    // Call the API
    const searchButtonClick = () => {
        return
    }
    
    const formPreventDefault = (e) => {
        e.preventDefault();
        if (e.key === 'Enter') {
            searchButtonClick();
        }
    }

    return (
        <div className="mt-4">
            <form onSubmit={formPreventDefault} onKeyDown={searchButtonClick}>
                <SearchBar
                    setState={setSearch}
                    onClick={searchButtonClick}
                />
            </form>
        </div>
    ) 
}