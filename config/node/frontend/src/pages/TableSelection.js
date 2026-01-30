import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import {Link} from "react-router-dom";
import {Container, Button} from "@mui/material";
import {red} from "@mui/material/colors";


function TableSelection(props) {
    return (
        <div>
            <div style={{display: "grid", gridTemplateColumns: 'repeat(3, 1fr)', gap: '35px', marginTop: '-75px'}}>
                    <Container>
                        <Card sx={{ width: 500 }}>
                          <CardMedia
                            component="img"
                            height="250"
                            image="/images/positive-hipster-entrepreneur-it-expert-software-developer.jpg"
                            alt="Pracownik"
                          />
                          <CardContent sx={{display: 'flex', justifyContent: 'center', alignContent: 'center'}}>
                            <Button
                                className="tableselection__button"
                                variant="contained"
                                size="medium"
                                component={Link}
                                sx={{backgroundColor: "#2c693f", fontSize: "20px"}}
                                to='/newrecord?table=employee'>Dodaj rekord do listy pracowników
                            </Button>
                          </CardContent>
                        </Card>
                    </Container>
                    <Card sx={{ width: 500 }}>
                          <CardMedia
                            component="img"
                            height="250"
                            image="/images/front-view-delivery-man-holding-box.jpg"
                            alt="Dostawca"
                          />
                          <CardContent sx={{display: 'flex', justifyContent: 'center', alignContent: 'center'}}>
                            <Button
                                className="tableselection__button"
                                variant="contained"
                                size="medium"
                                component={Link}
                                sx={{backgroundColor: "#2c693f", fontSize: "20px"}}
                                to='/newrecord?table=deliveryman'>Dodaj rekord do listy dostawców
                            </Button>
                          </CardContent>
                    </Card>

                    <Card sx={{ width: 500 }}>
                          <CardMedia
                            component="img"
                            height="250"
                            image="/images/dark-stores-countdown.jpg"
                            alt="Sklep"
                          />
                          <CardContent sx={{display: 'flex', justifyContent: 'center', alignContent: 'center'}}>
                            <Button
                                className="tableselection__button"
                                variant="contained"
                                size="medium"
                                component={Link}
                                sx={{backgroundColor: "#2c693f", fontSize: "20px"}}
                                to='/newrecord?table=stores'>Dodaj rekord do listy sklepów
                            </Button>
                          </CardContent>
                    </Card>

            </div>
        </div>
    );
}

export default TableSelection;