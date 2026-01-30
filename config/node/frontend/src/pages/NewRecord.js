import React, {useState} from 'react';
import {Grid, Container, Box, TextField, Button, Paper} from '@mui/material';
import {useSearchParams} from "react-router-dom";

function NewRecord(props) {
    const [searchParam] = useSearchParams();
    const table = searchParam.get('table')
    console.log("Tabela:", table)

    const [userName, setUserName] = useState("")
    const [userLocation, setUserLocation] = useState("")
    const [userPosts, setUserPosts] = useState(0)




    const handleSubmit = async (e) => {
        console.log("Wysyłam request do:", '/app/insert_user')
        console.log(userName, userLocation, userPosts)
        e.preventDefault();
        try {
            const response = await fetch('/app/insert_user', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: userName,
                    location: userLocation,
                    posts: userPosts
                })
            })
            console.log(response)
        } catch(e) {
            console.log(e)
        }
    }
    return (
        <div>
            <Grid container spacing={2} direction="column">
                <Grid item>
                    <Box sx={{ maxWidth: 'lg', mx: 'auto' }}>
                        <Paper elevation={3} sx={{p: 4}}>
                            <Box component="form" onSubmit={handleSubmit} sx={{display: 'block'}}>
                                <TextField
                                    style={{padding: 10}}
                                    label="imie"
                                    value={userName}
                                    onChange={(e)=>setUserName(e.target.value)}
                                ></TextField>
                                <TextField
                                    style={{padding: 10}}

                                    label="location"
                                    value={userLocation}
                                    onChange={(e) => setUserLocation(e.target.value)}
                                ></TextField>
                                <TextField
                                    style={{padding: 10}}

                                    label="posts"
                                    value={userPosts}
                                    onChange={(e) => setUserPosts(e.target.value)}
                                ></TextField>
                                <Button type="submit" variant="contained">Dodaj użytkownika</Button>
                            </Box>
                        </Paper>
                    </Box>
                </Grid>

                <Grid item>
                    <Box sx={{ maxWidth: 'lg', mx: 'auto' }}>
                        <Paper elevation={3} sx={{p: 4}}>
                            <Box component="form" onSubmit={handleSubmit}>
                                <TextField
                                    style={{padding: 10}}

                                    label="imie"
                                    value={userName}
                                    onChange={(e)=>setUserName(e.target.value)}
                                ></TextField>
                                <TextField
                                    style={{padding: 10}}

                                    label="location"
                                    value={userLocation}
                                    onChange={(e) => setUserLocation(e.target.value)}
                                ></TextField>
                                <TextField
                                    style={{padding: 10}}

                                    label="posts"
                                    value={userPosts}
                                    onChange={(e) => setUserPosts(e.target.value)}
                                ></TextField>
                                <Button type="submit" variant="contained">Dodaj użytkownika</Button>
                            </Box>
                        </Paper>
                    </Box>
                </Grid>
                <Grid item>
                    <Box sx={{ maxWidth: 'lg', mx: 'auto' }}>
                        <Paper elevation={3} sx={{p: 4}}>
                            <Box component="form" onSubmit={handleSubmit}>
                                <TextField
                                    style={{padding: 10}}

                                    label="imie"
                                    value={userName}
                                    onChange={(e)=>setUserName(e.target.value)}
                                ></TextField>
                                <TextField
                                    style={{padding: 10}}

                                    label="location"
                                    value={userLocation}
                                    onChange={(e) => setUserLocation(e.target.value)}
                                ></TextField>
                                <TextField
                                    style={{padding: 10}}

                                    label="posts"
                                    value={userPosts}
                                    onChange={(e) => setUserPosts(e.target.value)}
                                ></TextField>
                                <Button type="submit" variant="contained">Dodaj użytkownika</Button>
                            </Box>
                        </Paper>
                    </Box>
                </Grid>
            </Grid>

        </div>
    )
}
export default NewRecord;