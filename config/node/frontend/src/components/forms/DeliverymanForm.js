import React from 'react';
import {Box, Button, TextField} from "@mui/material";
import NewRecord from "../../pages/NewRecord";

function DeliverymanForm({ data, setData, onSubmit }) {
    return(
        <Box component="form" onSubmit={onSubmit} sx={{display: 'block'}}>
            <TextField
                style={{padding: 10}}
                label="Imię i nazwisko"
                value={data.name}
                onChange={(e)=>setData({...data, name:e.target.value})}
            ></TextField>
            <TextField
                style={{padding: 10}}
                label="Lokalizacja"
                value={data.location}
                onChange={(e) => setData({...data, location:e.target.value})}
            ></TextField>
            <TextField
                style={{padding: 10}}
                label="Numer telefonu"
                value={data.phoneNumber}
                onChange={(e) => setData({...data, phoneNumber:e.target.value})}
            ></TextField>
            <TextField
                style={{padding: 10}}
                label="Wypłata"
                value={data.salary}
                onChange={(e) => setData({...data, salary:e.target.value})}
            ></TextField>
            <TextField
                style={{padding: 10}}
                label="Przepracowane godziny"
                value={data.workedHours}
                onChange={(e) => setData({...data, workedHours:e.target.value})}
            ></TextField>
            <TextField
                style={{padding: 10}}
                label="Numer sklepu"
                value={data.store}
                onChange={(e) => setData({...data, store:e.target.value})}
            ></TextField>
            <Button type="submit" variant="contained">Dodaj dostawcę</Button>
        </Box>
    )
}
export default DeliverymanForm;
