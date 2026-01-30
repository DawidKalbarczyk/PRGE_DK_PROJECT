import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import {red} from '@mui/material/colors';


function UserCard({store}) {
    console.log('czym jest user: ', store)
    return (
        <div  style={{padding: 10}}>
            <Card sx={{maxWidth: 345}}>
                <CardHeader
                    avatar={
                        <Avatar sx={{bgcolor: red[500]}} aria-label="recipe">
                            {store.owner[0]}
                        </Avatar>
                    }
                    title={store.owner}
                    subheader={store.location}
                />

                <CardContent>
                    <Typography variant="body2" sx={{color: 'text.secondary'}}>
                        Twój znajomy {store.owner} opublikował {store.phoneNumber} postów.
                    </Typography>
                </CardContent>


            </Card>
        </div>
    );
}

export default UserCard;