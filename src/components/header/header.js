import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { fetchSearch } from '../../scripts/services/fetchs';
import './header.css'


const Header = () => {
    return (
        <header>
            <input placeholder='movie name' className='search-input' onChange={changeText} />
            <button onClick={searchSubmit}>Search</button>
        </header>
    )
}

export { Header }