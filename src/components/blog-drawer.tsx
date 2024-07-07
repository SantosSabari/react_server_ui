import { Button, Drawer, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import React, { useState } from 'react'

const BlogDrawer = (props:any) => {
    console.log(props)

    const [formData, setFormData] = useState({
        title: '',
        content: '',
      })

    const close =() =>{
        console.log('close')
        props.closeDrawer()
    }

    const handleInputChange= (event:any) =>{
        setFormData({
                ...formData,
                [event.target.name]: event.target.value
            }
        )
    }

    const saveBlog= ()=>{
        props.closeDrawer()
        props.saveBlogEmit(formData)
    }

  
    return (
        <>
            
            <Drawer
            className='MuiDrawer-paperAnchorDockedRight'
                 anchor='right'
                 open={props.isOpen}
                 onClose={close}
                >
                <div className='px-5'>
                { props.isUpdate === true ?  <h2>Update Blog</h2> : <h2>Create Blog</h2> }
                    <div className='row mb-5'>
                        <TextField id="outlined-basic" name='title' label="Title" 
                        variant="outlined" 
                        onChange={handleInputChange}
                        defaultValue={props.isUpdate === true ?  props.updateBlog.title : ''}
                        />
                    </div>
                    <div className='row mb-5'>
                    <TextField
                        id="outlined-multiline-static"
                        label="Multiline"
                        name='content'
                        multiline
                        rows={4}
                        fullWidth={true}
                        variant="outlined"
                        onChange={handleInputChange}
                    />
                    </div>
                    <div className='row mb-5'>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Age</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={20}
                            label="Age"
                            // onChange={handleChange}
                        >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                        </FormControl>
                    </div>
                    <div className='row mb-5'>
                        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                    </div>
                    <div className='flex gap-4 pt-10'>
                        <Button variant="outlined" onClick={close}>Cancel</Button>
                     { props.isUpdate === true ? 
                        <Button variant="contained" type="submit" onClick={saveBlog}>Update</Button> :
                        <Button variant="contained" type="submit" onClick={saveBlog}>Save</Button>
                     }   
                    </div>

                    
                    
                </div>
            </Drawer>
        </>
    )
}

export default BlogDrawer;