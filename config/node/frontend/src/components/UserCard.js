import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import {red} from '@mui/material/colors';

const translations = {
    id: "ID",
    date: "Data",
    geom: "Geometria Hex",
    locationfrom: "Skąd",
    locationto: "Dokąd",
    deliveryman: "Dostawca",
    distance: "Dystans",
    name: "Nazwisko",
    location: "Lokalizacja",
    phonenumber: "Nr. telefonu",
    salary: "Wypłata",
    workedhours: "Godziny pracy",
    store: "Sklep",
    age: "Wiek",
    position: "Stanowisko",
    employeesnr: "Pracownicy",
    owner: "Właściciel"
}

// Get-Content deliveries.sql | docker exec -i prge_dk_project_postgis psql -U postgres -d postgres
function UserCard({table, columnCount, columnNames, isFirstRow}) {
    console.log('czym jest user: ', table)
    console.log('Ilość w table:', columnCount)
    console.log("kolumny:", columnNames)
    // Odwołanie się poprzez columnNames[0] itd

    function columnNamesFunc() {
        return columnNames.map((col) => {
            return (
                <div key={col} className="user-card-item-container">
                    {translations[col]}
                </div>
            )

        });
    }
    function tableItems() {
        return columnNames.map((col, index) => {
           return (
               <div key={col} className="user-card-item-container">
                   {table[col]}
               </div>
           )
        });
    }
    console.log(tableItems())
    return (
        <div className="user-card-container">
            {isFirstRow && (
                <div className="user-card-main-container">
                    {columnNamesFunc()}
                </div>
            )}

            <div className="user-card-data-container">
              {tableItems()}
            </div>
        </div>
    );
}

export default UserCard;