import React from 'react';
import {Box, Button, TextField} from "@mui/material";

function DeliverymanForm({ data, setData, onSubmit }) {



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
                className="forms-textfield"
                label="Lokalizacja"
                value={data.location}
                onChange={(e) => setData({...data, location:e.target.value})}
            ></TextField>
            <TextField
                sx={{padding: '10px', width: '100%'}}
                className="forms-textfield"
                label="Numer telefonu (XXX-XXX-XXX)"
                value={data.phoneNumber}
                onChange={(e) => setData({...data, phoneNumber:e.target.value})}
            ></TextField>
            <TextField
                sx={{padding: '10px', width: '100%'}}
                className="forms-textfield"
                label="Wypłata (XXX.XX)"
                value={data.salary}
                onChange={(e) => setData({...data, salary:e.target.value})}
            ></TextField>
            <TextField
                sx={{padding: '10px', width: '100%'}}
                className="forms-textfield"
                label="Przepracowane godziny"
                value={data.workedHours}
                onChange={(e) => setData({...data, workedHours:e.target.value})}
            ></TextField>
            <TextField
                sx={{padding: '10px', width: '100%'}}
                className="forms-textfield"
                label="Numer sklepu (id)"
                value={data.store}
                onChange={(e) => setData({...data, store:e.target.value})}
            ></TextField>
            <Button type="submit" sx={{backgroundColor: 'gray', padding: '10px',
                    color: 'white', fontSize: '18px', marginTop: '10px'
            }}>Dodaj dostawcę</Button>
        </Box>
        )
}
export default DeliverymanForm;
