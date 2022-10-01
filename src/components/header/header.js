import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { fetchSearch } from '../../scripts/services/fetchs';
import './header.css'


const Header = (props) => {
    return (
        <header>
            <div className='header-title'>
                <h1>Movie Tool Search</h1>
            </div>
            <div>
                <input placeholder='movie name' className='search-input' onChange={props.onChange} />
                <button onClick={props.searchSubmit}>Search</button>
            </div>
        </header>
    )
}

export { Header }