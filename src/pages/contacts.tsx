import React, { useEffect, useState } from 'react'
import {useFetch} from '../hooks/fetch-hook';
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Collapse, IconButton, Typography } from '@mui/material';
import { AddCircleRounded, Delete, DeleteForeverRounded, DeleteOutlineRounded, ExpandMore } from '@mui/icons-material';
import { red } from '@mui/material/colors';
import AddUserDrawer from '../components/add-user-drawer';
import { User } from '../interface/user-interface';
import axios from 'axios';



function Contacts() {
    const { data, loading, error, fetch } = useFetch<{ message: string }>('http://localhost:5000/api/users');
    const [isOpenDrawer, setOpenDrawer] = useState(false)

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    
    
    const toggleDrawer = () =>{
        setOpenDrawer((preState) => !preState)
        // fetch();
    }

  const deleteUser =(user:User) =>{
    axios.delete('http://localhost:5000/api/user/' + user.id)
    .then((response) => {
      // Handle the response data
      console.log('**************delete User***************')
    //   toast('User Deleted Successfully', {
    //     position: toast.POSITION.TOP_RIGHT,
    //   });
      fetch();
    })
    .catch((error) => {
      console.error('Error:', error);
  });
  }


  return (
    <>
    <div className='flex justify-end mb-3'>
        <IconButton aria-label="add-users" size='large' onClick={toggleDrawer}>
            <AddCircleRounded color='primary'/>
        </IconButton>
    </div>
        <div className='users-list flex gap-4 flex-wrap '>
        {
            data.map((item:any) => (
                <Card sx={{ maxWidth: 345 }} key={item.id} className='rounded-lg'>
                <CardHeader
                    avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                        {item.username.charAt(0)}
                    </Avatar>
                    }
                    action={
                    <IconButton aria-label="settings">
                        {/* <MoreVertIcon /> */}
                    </IconButton>
                    }
                    title={item.username}
                    subheader={`${item.city}, ${item.country}`}
                />
                {/* <CardMedia
                    component="img"
                    height="194"
                    image="/static/images/cards/paella.jpg"
                    alt="Paella dish"
                /> */}
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        {item.email}
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites" color='secondary' onClick={() => deleteUser(item)}>
                        <DeleteOutlineRounded/>
                    </IconButton>
                    <IconButton aria-label="share">
                    {/* <ShareIcon /> */}
                    </IconButton>
                </CardActions>
            </Card>
            ))
        }
        </div>
       
        {isOpenDrawer && <AddUserDrawer isOpen={isOpenDrawer} childToParent={toggleDrawer}/>}
    </>
  )
}

export default Contacts