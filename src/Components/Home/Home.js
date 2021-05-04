import React, { useState, useEffect } from 'react';
import SingleClub from '../SingleClub/SingleClub';

import './Home.css'

const Home = () => {


    const [clubs, setClubs] = useState([]);

    useEffect(() => {
        const url = 'https://www.thesportsdb.com/api/v1/json/1/lookup_all_teams.php?id=4328';
        fetch(url)
            .then(res => res.json())
            .then(data => setClubs(data.teams.slice(0, 15)))
    }, [])
    // console.log(clubs.[2].strStadiumThumb);
    // const {strStadiumThumb} = clubs.[1];
    return (
        <div className="club-container">
            
            <div>

            <div className="header-img img-fluid">
                <h1 className="web-name">Team Tracker</h1>
            </div>
            </div>
            <div className="container App p-4 ">
                <div className="row">
                    {
                        clubs.map(club => <SingleClub className="App" club={club}></SingleClub>
                        )
                    }
                </div>
            </div>

        </div>
    );
};

export default Home;