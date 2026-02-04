import React from 'react';

import {Button} from "@mui/material";
import {Link} from "react-router-dom";

function Home(props) {
    return (
        <div className="home">
            <div className="home-container">
                <img className="home-image" alt="mapa-polski" src="/images/mapa-polski.png"/>
            </div>
            <div className="home-container">
                <h1 className="home-title">
                    <span className="home-title-1st">GEO</span>PORTAL
                </h1>
                <h2 className="home-description">
                    Geoportal tematyczny poświęcony sklepom
                </h2>
                <Button
                    className="home-button"
                    variant="contained"
                    size="large"
                    sx={{
                        backgroundColor: 'gray',
                        width: '200px',
                        height: '80px',
                        fontSize: '32px',
                        borderRadius: '16px',
                        transition: 'background-color 1s ease',
                        '&:hover': {
                            backgroundColor: 'rgb(77, 76, 75)'
                        }
                    }}
                    component={Link}
                    to='services'>START</Button>
                <div className="home-author-container">
                    <p className="home-p-author">Wykonał:</p>
                    <p className="home-p-author-desc">Dawid Kalbarczyk</p>
                    <p className="home-p-author-desc">WIG23AX1S0</p>
                    <p className="home-p-author-desc">Nr albumu: 85222</p>
                </div>

            </div>
        </div>
    );
}

export default Home;