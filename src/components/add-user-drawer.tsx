import { Button, Drawer, List, TextField } from '@mui/material'
import React, { useState } from 'react'
import { usePostFetch } from '../hooks/fetch-hook'
import { User } from '../interface/user-interface';

const AddUserDrawer = (props:any) => {
    // const [close, setClose] = useState(true)
    const { postData, response, error, loading } = usePostFetch<User>('http://localhost:5000/api/addUser');
   
    const [formData, setFormData] = useState<User>({
            username: '',
            city: '',
            age:'',
            email:'',
            country:'',
          })

    const closeMethod = () =>{
        console.log('close')
        props.childToParent();
    }

    const addUser = () =>{

    }

  const handleInputChange = (event:any) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  }

  const saveUsers = (e:any) =>{
    e.preventDefault();
    console.log(formData)
    postData(formData);
    props.childToParent();
  }

  return (
   
    <>
      <Drawer
        anchor='right'
        open={props.isOpen}
        onClose={closeMethod}
        >
        {
            <div className='container mx-auto px-10 mt-5'>
                <form onSubmit={saveUsers}>
                    <div className='flex flex-col gap-5'>
                        <TextField label="Name" color="secondary"  name='username' onChange={handleInputChange}/>
                        <TextField label="Email" color="secondary"  name='email' type='email' onChange={handleInputChange}/>
                        <TextField label="Location" color="secondary"  name='city' type='text' onChange={handleInputChange}/>
                        <TextField label="Age" color="secondary"  name='age' type='text' onChange={handleInputChange}/>
                    </div>
                    <div className='flex gap-4 pt-10'>
                        <Button variant="outlined">Cancel</Button>
                        <Button variant="contained" type="submit" onClick={addUser}>Save</Button>
                    </div>
                </form>
            </div>
        }
    </Drawer>
    </>
  )
}

export default AddUserDrawer
