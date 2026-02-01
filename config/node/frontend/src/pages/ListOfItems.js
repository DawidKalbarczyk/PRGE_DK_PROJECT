import React, {useEffect, useState} from 'react';
import UserCard from "../components/UserCard";
import {useSearchParams} from "react-router-dom";

function ListOfItems(props) {
    //https://jsonplaceholder.typicode.com/users
    // UseEffect nasłuchuje jakąś rzecz i w przypadku jej zmiany wywołuje kod
    const [searchParams] = useSearchParams()
    const tableName = searchParams.get('table')
    const [param, setParam] = useState([]); //Tworzenie hooka, który może przechowywać coś w pamięci


    useEffect(() => {
        fetch(`/app/get_users?table=${tableName}`)
            .then(res => res.json())
            .then(res => {
                console.log(res);
                setParam(res)
            })
        // Pobiera dane ze źródła
    },[tableName])

    //Dodaj frontend generowany na bieżąco z postgres
    return (
        <div>
            <div className="list-of-items-container">
                <div className="list-of-items-title">
                    Lista {tableName}
                </div>
                {param.data?.map(item => <UserCard key={item.id} table={item}/>)}
            </div>
        </div>
    );
}

export default ListOfItems;