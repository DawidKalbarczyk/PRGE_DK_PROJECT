import React, {useEffect, useState} from 'react';
import UserCard from "../components/UserCard";
import {useSearchParams} from "react-router-dom";

function ListOfItems(props) {
    //https://jsonplaceholder.typicode.com/users
    // UseEffect nasłuchuje jakąś rzecz i w przypadku jej zmiany wywołuje kod
    const [searchParams] = useSearchParams()
    const tableName = searchParams.get('table')
    const [param, setParam] = useState([]); //Tworzenie hooka, który może przechowywać coś w pamięci
    const [columnCount, setColumnCount] = useState(0);
    const [columnNames, setColumnNames] = useState([]);

    useEffect(() => {
        fetch(`/app/get_users?table=${tableName}`)
            .then(res => res.json())
            .then(res => {
                console.log(res);
                setParam(res)
                if (res.data && res.data.length > 0) {
                    setColumnCount(Object.keys(res.data[0]).length);
                    setColumnNames(Object.keys(res.data[0]));
                }
            })
        // Pobiera dane ze źródła
    },[tableName])

    //Dodaj frontend generowany na bieżąco z postgres
    return (
        <div className="list-of-items-return-div">
            <div className="list-of-items-title-container">
                <div className="list-of-items-title">
                    Lista {tableName}
                </div>
            </div>
            <div className="list-of-items-container">
                {param.data?.map(item =>
                    <UserCard key={item.id} table={item} columnCount={columnCount} columnNames={columnNames}/>
                )}
            </div>
        </div>
    );
}

export default ListOfItems;