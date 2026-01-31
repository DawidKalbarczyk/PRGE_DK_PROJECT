import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import {Link} from "react-router-dom";
import {Container, Button} from "@mui/material";


function TableSelection(props) {
    return (
        <div>
            <div style={{display: "grid", gridTemplateColumns: 'repeat(2, 1fr)', gap: '35px', marginTop: '-50px', justifyContent: 'center', alignItems: 'center', margin: '16px'}}>
                <Container>
                    <Card sx={{ width: 450 }}>
                      <CardMedia
                        component="img"
                        height="225"
                        image="/images/positive-hipster-entrepreneur-it-expert-software-developer.jpg"
                        alt="Pracownik"
                        sx={{
                            transition: 'filter 0.5s ease',
                            '&:hover': {
                                    filter: 'brightness(0.6)'
                                }
                        }}
                      />
                      <CardContent sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '50px'}}>
                          <Button
                            className="tableselection__button"
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
                            to='/newrecord?table=employee'>Dodaj rekord do listy pracowników
                            </Button>

                      </CardContent>
                    </Card>
                </Container>
                <Container>
                    <Card sx={{ width: 450 }}>
                          <CardMedia
                            component="img"
                            height="225"
                            image="/images/front-view-delivery-man-holding-box.jpg"
                            alt="Dostawca"
                            sx={{
                                transition: 'filter 0.5s ease',
                                '&:hover': {
                                        filter: 'brightness(0.6)'
                                    }
                            }}
                          />
                          <CardContent sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '50px'}}>
                              <Button
                                className="tableselection__button"
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
                                to='/newrecord?table=deliveryman'>Dodaj rekord do listy dostawców
                                </Button>
                          </CardContent>
                    </Card>
                </Container>
                <Container>
                    <Card sx={{ width: 450 }}>
                          <CardMedia
                            component="img"
                            height="225"
                            image="/images/dark-stores-countdown.jpg"
                            alt="Sklep"
                            sx={{
                                transition: 'filter 0.5s ease',
                                '&:hover': {
                                        filter: 'brightness(0.6)'
                                    }
                            }}
                          />
                          <CardContent sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '50px'}}>
                              <Button
                                className="tableselection__button"
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
                                to='/newrecord?table=stores'>Dodaj rekord do listy sklepów
                                </Button>
                          </CardContent>
                    </Card>
                </Container>
                <Container>
                    <Card sx={{ width: 450 }}>
                          <CardMedia
                            component="img"
                            height="225"
                            image="/images/front-view-delivery-man-holding-box.jpg"
                            alt="Dostawca"
                            sx={{
                                transition: 'filter 0.5s ease',
                                '&:hover': {
                                        filter: 'brightness(0.6)'
                                    }
                            }}
                          />
                          <CardContent sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '50px'}}>
                              <Button
                                className="tableselection__button"
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
                                to='/newrecord?table=deliveryman'>Dodaj rekord do listy dostawców
                                </Button>
                        </CardContent>
                    </Card>
                </Container>

            </div>
        </div>
    );
}

export default TableSelection;