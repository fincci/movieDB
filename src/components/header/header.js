import { useState } from 'react';
import { fetchSearch } from '../../scripts/services/fetchs';
import './header.css'

const Header = () => {
    return (
        <header>
            <input className='search-input' />
            <button>Search</button>
        </header>
    )
}

export { Header }