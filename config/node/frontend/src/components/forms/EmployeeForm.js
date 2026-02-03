import React from 'react';
import {Box, Button, TextField} from "@mui/material";

function EmployeeForm({ data, setData, onSubmit }) {
    return(
        <Box component="form" onSubmit={onSubmit} sx={{
                display: "grid", gridTemplateColumns: '1fr',
                alignItems: 'center', justifyContent: 'center'
        }}>
            <TextField
                sx={{padding: '10px', width: '100%'}}
                label="Imię i nazwisko"
                value={data.name}
                onChange={(e)=>setData({...data, name:e.target.value})}
            ></TextField>
            <TextField
                sx={{padding: '10px', width: '100%'}}
                label="Lokalizacja"
                value={data.location}
                onChange={(e) => setData({...data, location:e.target.value})}
            ></TextField>
            <TextField
                sx={{padding: '10px', width: '100%'}}
                label="Wiek"
                value={data.age}
                onChange={(e) => setData({...data, age:e.target.value})}
            ></TextField>
            <TextField
                sx={{padding: '10px', width: '100%'}}
                label="Numer telefonu (XXX-XXX-XXX)"
                value={data.phoneNumber}
                onChange={(e) => setData({...data, phoneNumber:e.target.value})}
            ></TextField>
            <TextField
                sx={{padding: '10px', width: '100%'}}
                label="Wypłata"
                value={data.salary}
                onChange={(e) => setData({...data, salary:e.target.value})}
            ></TextField>
            <TextField
                sx={{padding: '10px', width: '100%'}}
                label="Stanowisko"
                value={data.position}
                onChange={(e) => setData({...data, position:e.target.value})}
            ></TextField>
            <TextField
                sx={{padding: '10px', width: '100%'}}
                label="Przepracowane godziny"
                value={data.workedHours}
                onChange={(e) => setData({...data, workedHours:e.target.value})}
            ></TextField>
            <TextField
                sx={{padding: '10px', width: '100%'}}
                label="Numer sklepu (id)"
                value={data.store}
                onChange={(e) => setData({...data, store:e.target.value})}
            ></TextField>
            <Button type="submit" variant="contained">Dodaj pracownika</Button>
        </Box>
    )
}
export default EmployeeForm;