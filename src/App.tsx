import React from 'react';

import './App.css';

export const App = () => {
    return (
       <>
        <header>
            <h1>
                <strong>Mega</strong> Ogloszenia
            </h1>
            <button>Dodaj ogloszenie</button>
            <div className="search">
                <input type="text"/>
                <button>Szukaj</button>
            </div>


        </header>
           <div className="map">
               ...
           </div>



       </>
    );
}


