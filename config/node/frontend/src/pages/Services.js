import React from 'react';
import {Button, Container} from "@mui/material";
import {Link} from "react-router-dom";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";

function Services(props) {
    return (
        <div>
            <div className="services-title-container">
                <h1 className="services-title">
                    <span className="services-title-1st">GEO</span>SERWIS
                </h1>
            </div>

            <div className="services-content-container">
                <Card sx={{ width: 450 }}>
                  <CardMedia
                    component="img"
                    height="225"
                    image="/images/geoportal-krajowy.png"
                    alt="Pracownik"
                    sx={{
                        transition: 'filter 0.5s ease',
                        '&:hover': {
                                filter: 'brightness(0.6)'
                            }
                    }}
                  />
                  <CardContent sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '50px', flexDirection: 'column', boxShadow: 'inset 0px 0px 20px 10px rgba(0,0,0,0.4)'}}>
                      <div className="services-description-container">
                          <p className="services-description-title">Przegląd mapy dostępnych warstw</p>
                      </div>
                      <Button
                        className="services__button"
                        variant="contained"
                        size="medium"
                        component={Link}
                        sx={{
                            backgroundColor: "#2c693f",
                            fontSize: "18px",
                            textAlign: 'center',
                            transition: 'filter 0.5s ease',
                            '&:hover': {
                                filter: 'brightness(0.6)'
                            }
                            }}
                        to='/map'>Przeglądaj mapę
                        </Button>

                  </CardContent>
                </Card>
                <Card sx={{ width: 450 }}>
                  <CardMedia
                    component="img"
                    height="225"
                    image="/images/browse-lists.png"
                    alt="Pracownik"
                    sx={{
                        transition: 'filter 0.5s ease',
                        '&:hover': {
                                filter: 'brightness(0.6)'
                            }
                    }}
                  />
                  <CardContent sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '50px', flexDirection: 'column', boxShadow: 'inset 0px 0px 20px 10px rgba(0,0,0,0.4)'}}>
                      <div className="services-description-container">
                          <p className="services-description-title">Przegląd danych dostępnych warstw</p>
                      </div>
                      <Button
                        className="services__button"
                        variant="contained"
                        size="medium"
                        component={Link}
                        sx={{
                            backgroundColor: "#2c693f",
                            fontSize: "18px",
                            textAlign: 'center',
                            transition: 'filter 0.5s ease',
                            '&:hover': {
                                filter: 'brightness(0.6)'
                            }
                            }}
                        to='/tableselection?rootPage=list'>Przeglądaj listę
                        </Button>

                  </CardContent>
                </Card>

                <Card sx={{ width: 450 }}>
                  <CardMedia
                    component="img"
                    height="225"
                    image="/images/add-record.png"
                    alt="Pracownik"
                    sx={{
                        transition: 'filter 0.5s ease',
                        '&:hover': {
                                filter: 'brightness(0.6)'
                            }
                    }}
                  />
                  <CardContent sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '50px', flexDirection: 'column', boxShadow: 'inset 0px 0px 20px 10px rgba(0,0,0,0.4)'}}>
                      <div className="services-description-container">
                          <p className="services-description-title">Dodanie nowego rekordu do wybranej warstwy</p>
                      </div>
                      <Button
                        className="services__button"
                        variant="contained"
                        size="medium"
                        component={Link}
                        sx={{
                            backgroundColor: "#2c693f",
                            fontSize: "18px",
                            textAlign: 'center',
                            transition: 'filter 0.5s ease',
                            '&:hover': {
                                filter: 'brightness(0.6)'
                            }
                            }}
                        to='/tableselection?rootPage=newrecord'>Dodaj rekord
                        </Button>

                  </CardContent>
                </Card>
            </div>
        </div>
    );
}

export default Services;