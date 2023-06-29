import React from 'react';
import {Btn} from "../common/Btn";

import './Header.css';

export const Header = () => (
    <header>
        <h1>
            <strong>Mega </strong> Ogloszenia
        </h1>
        <Btn text='Dodaj ogloszenie'/>
        <div className="search">
            <input type="text"/> <Btn text='Szukaj'/>
        </div>
    </header>
);
