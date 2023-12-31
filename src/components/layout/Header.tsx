import React, {FormEvent, useContext, useState} from 'react';
import {Btn} from "../common/Btn";
import {SearchContext} from "../../contexts/search.context";
import {Link} from "react-router-dom";

import './Header.css';



export const Header = () => {
    const {search, setSearch} = useContext(SearchContext);
    const [inputVal, setInputVal] = useState(search);

    const setSearchFromLocalState = (e: FormEvent) => {
        e.preventDefault();
        setSearch(inputVal);
    };

    return (
        <header>
            <Link to="/">
                <h1>
                    <strong>Mega </strong> Ogloszenia
                </h1>
            </Link>
            <Btn to='/add' text='Dodaj ogloszenie'/>
            <form className="search" onSubmit={setSearchFromLocalState}>
                <input type="text" value={inputVal} onChange={e => setInputVal(e.target.value)}/> <Btn text='Szukaj'/>
            </form>
        </header>
    )
};
