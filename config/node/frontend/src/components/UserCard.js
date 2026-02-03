import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import {red} from '@mui/material/colors';

// Get-Content deliveries.sql | docker exec -i prge_dk_project_postgis psql -U postgres -d postgres
function UserCard({table, columnCount, columnNames}) {
    console.log('czym jest user: ', table)
    console.log('Ilość w table:', columnCount)
    console.log("kolumny:", columnNames)


    function tableItems() {
        return columnNames.map((col) => {
           return (
               <div key={col}>
                   {table[col]}
               </div>
           )
        });
    }
    console.log(tableItems())
    return (
        <div>
            <div className="user-card-item-container">
              {tableItems()}
            </div>





            <Card sx={{width: "100%"}}>
                <CardHeader

                    avatar={
                        <Avatar sx={{bgcolor: red[500]}} aria-label="recipe">
                            {table.deliveryman}
                        </Avatar>
                    }
                    title={table.id}
                    subheader={table.locationFrom}
                />

                <CardContent>
                    <Typography variant="body2" sx={{color: 'text.secondary'}}>
                        Twój znajomy {table.locationTo} opublikował {table.phoneNumber} postów.
                    </Typography>
                </CardContent>


            </Card>
        </div>
    );
}

export default UserCard;