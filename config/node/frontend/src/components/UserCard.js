import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import {red} from '@mui/material/colors';


function UserCard({table}) {
    console.log('czym jest user: ', table)
    return (
        <div  style={{padding: 10}}>
            <Card sx={{maxWidth: 345}}>
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