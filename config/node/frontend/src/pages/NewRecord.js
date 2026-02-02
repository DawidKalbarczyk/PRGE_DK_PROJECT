import React, {useState} from 'react';
import {Grid, Box, Paper} from '@mui/material';
import {useSearchParams} from "react-router-dom";
import DeliverymanForm from '../components/forms/DeliverymanForm.js';
import EmployeeForm from '../components/forms/EmployeeForm.js';
import StoreForm from '../components/forms/StoreForm.js';

function NewRecord(props) {
    const [searchParam] = useSearchParams();
    const table = searchParam.get('table')
    console.log("Tabela:", table)

    const [deliverymanData, setDeliverymanData] = useState({
        name: "",
        location: "",
        phoneNumber: "",
        salary: 0,
        workedHours: 0,
        store: 0
    });
    const [employeeData, setEmployeeData] = useState({
        name: "",
        location: "",
        age: 0,
        phoneNumber: "",
        salary: 0,
        position: "",
        workedHours: 0,
        store: 0
    });
    const [storeData, setStoreData] = useState({
        owner: "",
        location: "",
        employeesNr: 0,
        phoneNumber: ""
    });




    const handleSubmit = async (e) => {
        console.log("Wysyłam request do:", `/app/insert_user?table=${table}`)
        e.preventDefault();
        let dataToSend = {};

        switch (table) {
            case "deliverymen":
                dataToSend = { deliveryman: deliverymanData}
                break;
            case "employees":
                dataToSend = { employee: employeeData}
                break;
            case "stores":
                dataToSend = { store: storeData}
                break;
            default:
                console.log("Błąd w nazwie tabel")
                return
        }
        console.log("Dane do wysłania:", dataToSend);
        try {
            const response = await fetch(`/app/insert_user?table=${table}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(dataToSend)
            })

            const data = await response.json();
            if (data.status === 1) {
                alert("Rekord dodany pomyślnie.");

                switch (table) {
                    case "deliverymen":
                        setDeliverymanData({name: "", location: "", phoneNumber: "", salary: 0, workedHours: 0, store: 0});
                        break;
                    case "employees":
                        setEmployeeData({name: "", location: "", age: 0, phoneNumber: "", salary: 0, position: "", workedHours: 0, store: 0});
                        break;
                    case "stores":
                        setStoreData({owner: "", location: "", employeesNr: 0, phoneNumber: ""});
                        break;
                    default:
                        console.log("Błąd w ładowaniu formularza.")
                        return
                }
            }
        } catch(e) {
            console.log("Błąd:",e);
            console.log("Błąd podczas dodawania rekordu.")
        }
    }

    const renderForm = () => {
        switch (table) {
            case "deliverymen":
                return <DeliverymanForm data={deliverymanData} setData={setDeliverymanData} onSubmit={handleSubmit}/>;
            case "employees":
                return <EmployeeForm data={employeeData} setData={setEmployeeData} onSubmit={handleSubmit}/>;
            case "stores":
                return <StoreForm data={storeData} setData={setStoreData} onSubmit={handleSubmit}/>;
            default:
                console.log("Błąd w renderowaniu formularza.")
        }
    };
    return (
        <div>
            <Grid container spacing={2} direction="column">
                <Grid item>
                    <Box sx={{ maxWidth: 'lg', mx: 'auto' }}>
                        <Paper elevation={3} sx={{p: 4}}>
                            {renderForm()}
                        </Paper>
                    </Box>
                </Grid>
            </Grid>
        </div>
    )
}
export default NewRecord;