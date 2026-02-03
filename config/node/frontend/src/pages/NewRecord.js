import React, {useState} from 'react';
import {Grid, Box, Paper} from '@mui/material';
import {useSearchParams} from "react-router-dom";
import DeliverymanForm from '../components/forms/DeliverymanForm.js';
import EmployeeForm from '../components/forms/EmployeeForm.js';
import StoreForm from '../components/forms/StoreForm.js';
import DeliveriesForm from '../components/forms/DeliveriesForm.js';

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
    const [deliveriesData, setDeliveriesData] = useState({
        date: "",
        locationFrom: "",
        locationTo: "",
        deliveryman: 0,
        distance: 0
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
            case "deliveries":
                dataToSend = { delivery: deliveriesData}
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
            });

            console.log("Response status:", response.status);
            
            if (!response.ok) {
                let errorMsg = `Błąd ${response.status}`;
                try {
                    const errorData = await response.json();
                    errorMsg = errorData.detail || errorMsg;
                } catch (jsonErr) {
                    const textError = await response.text();
                    console.error("Odpowiedź serwera (text):", textError);
                    errorMsg = `Błąd serwera: ${response.status}`;
                }
                alert(errorMsg);
                return;
            }

            const data = await response.json();
            console.log("Otrzymane dane:", data);
            
            if (data.status === 1) {
                alert("Rekord dodany pomyślnie!");

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
                    case "deliveries":
                        setDeliveriesData({date: "", locationFrom: "", locationTo: "", deliveryman: 0, distance: 0});
                        break;
                    default:
                        console.log("Błąd w ładowaniu formularza.")
                        return
                }
            }
        } catch(error) {
            console.error("Błąd catch:", error);
            alert(`Błąd podczas komunikacji z serwerem: ${error.message}`);
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
            case "deliveries":
                return <DeliveriesForm data={deliveriesData} setData={setDeliveriesData} onSubmit={handleSubmit}/>;
            default:
                console.log("Błąd w renderowaniu formularza.")
        }
    };
    return (
        <div className="new-record-main-container">
            <div className="new-record-title-container">
                Formularz {table}
            </div>
            <div className="new-record-content-container">
                {renderForm()}
            </div>
        </div>
    )
}
export default NewRecord;