import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { fetchSearch } from '../../scripts/services/fetchs';
import './header.css'


const Header = (props) => {
    return (
        <header>
            <input placeholder='movie name' className='search-input' onChange={props.onChange} />
            <button onClick={props.searchSubmit}>Search</button>
        </header>
    )
}

export { Header }