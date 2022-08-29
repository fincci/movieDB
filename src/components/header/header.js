import React, { useState } from 'react';
import { fetchSearch } from '../../scripts/services/fetchs';
import './header.css'


const Header = () => {
    const [searchText, setSearchText] = useState('')

    const changeText = (e) => {
        setSearchText(e.target.value.toLowerCase())
    }

    const searchSubmit = () => {
        return console.log(searchText);
    }

    return (
        <header>
            <input placeholder='movie name' className='search-input' onChange={changeText} />
            <button onClick={searchSubmit}>Search</button>
        </header>
    )
}

export { Header }