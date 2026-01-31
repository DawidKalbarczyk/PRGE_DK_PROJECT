import React from 'react';

import {Typography, Button} from "@mui/material";
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
                        borderRadius: '16px'}}
                    component={Link}
                    to='services'>START</Button>
            </div>
        </div>
    );
}

export default Home;