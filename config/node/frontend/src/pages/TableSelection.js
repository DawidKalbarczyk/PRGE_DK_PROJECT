import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import {Link, useSearchParams} from "react-router-dom";
import {Button} from "@mui/material";


function TableSelection(props) {
    const [searchParams] = useSearchParams()
    const rootPage = searchParams.get('rootPage')
    let routing = []
    let names = []
    if (rootPage === 'list') {
        routing = [
            '/list?table=employee',
            '/list?table=deliveryman',
            '/list?table=stores',
            '/list?table=deliveries',

        ]
        names = [
            'Przeglądaj rekordy listy pracowników',
            'Przeglądaj rekordy listy dostawców',
            'Przeglądaj rekordy listy sklepów',
            'Przeglądaj rekordy listy zamówień'

        ]
        //zmien tytuly przyciskow
    } else if (rootPage === 'newrecord') {
        routing  = [
            '/newrecord?table=employee',
            '/newrecord?table=deliveryman',
            '/newrecord?table=stores',
            '/newrecord?table=deliveries'
        ]
        names = [
            'Dodaj rekord do listy pracowników',
            'Dodaj rekord do listy dostawców',
            'Dodaj rekord do listy sklepów',
            'Dodaj rekord do listy zamówień'

        ]
    } else {
        console.log("Błąd w przekierowaniu parametru")
    }

    return (
        <div>
            <div style={{display: "grid", gridTemplateColumns: 'repeat(2, 1fr)', rowGap: '15px', columnGap: '35px', marginTop: '-50px', justifyContent: 'center', alignItems: 'center', margin: '16px'}}>
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
                      <CardContent sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '75px'}}>
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
                            to={routing[0]}>{names[0]}
                            </Button>

                      </CardContent>
                    </Card>

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
                          <CardContent sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '75px'}}>
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
                                to={routing[1]}>{names[1]}
                                </Button>
                          </CardContent>
                    </Card>
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
                          <CardContent sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '75px'}}>
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
                                to={routing[2]}>{names[2]}
                                </Button>
                          </CardContent>
                    </Card>
                    <Card sx={{ width: 450 }}>
                          <CardMedia
                            component="img"
                            height="225"
                            image="/images/courier.jpg"
                            alt="Dostawca"
                            sx={{
                                transition: 'filter 0.5s ease',
                                '&:hover': {
                                        filter: 'brightness(0.6)'
                                    }
                            }}
                          />
                          <CardContent sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '75px'}}>
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
                                to={routing[3]}>{names[3]}
                                </Button>
                        </CardContent>
                    </Card>
            </div>
        </div>
    );
}

export default TableSelection;