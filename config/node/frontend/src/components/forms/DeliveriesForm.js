import React from 'react';
import {Box, Button, TextField} from "@mui/material";

function DeliveriesForm({ data, setData, onSubmit }) {
        return(
            <Box component="form" onSubmit={onSubmit} sx={{
                    display: "grid", gridTemplateColumns: '1fr',
                    alignItems: 'center', justifyContent: 'center'
            }}>
                <TextField
                    sx={{padding: '10px', width: '100%'}}
                    label="Data (RRRR-MM-DD)"
                    value={data.date}
                    onChange={(e)=>setData({...data, date:e.target.value})}
                ></TextField>
                <TextField
                    sx={{padding: '10px', width: '100%'}}
                    className="forms-textfield"
                    label="Skąd"
                    value={data.locationFrom}
                    onChange={(e) => setData({...data, locationFrom:e.target.value})}
                ></TextField>
                <TextField
                    sx={{padding: '10px', width: '100%'}}
                    className="forms-textfield"
                    label="Dokąd"
                    value={data.locationTo}
                    onChange={(e) => setData({...data, locationTo:e.target.value})}
                ></TextField>
                <TextField
                    sx={{padding: '10px', width: '100%'}}
                    className="forms-textfield"
                    label="Dostawca (id)"
                    value={data.deliveryman}
                    onChange={(e) => setData({...data, deliveryman:e.target.value})}
                ></TextField>
                <TextField
                    sx={{padding: '10px', width: '100%'}}
                    className="forms-textfield"
                    label="Dystans (XXX.XX)"
                    value={data.distance}
                    onChange={(e) => setData({...data, distance:e.target.value})}
                ></TextField>
                <Button type="submit" sx={{backgroundColor: 'gray', padding: '10px',
                        color: 'white', fontSize: '18px', marginTop: '10px'
                }}>Dodaj dostawcę</Button>
            </Box>
        )
}
export default DeliveriesForm;
