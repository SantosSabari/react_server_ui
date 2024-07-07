import { Close } from '@mui/icons-material'
import { Box, Button, Drawer, FormControl, IconButton, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useAppSelector } from '../../hooks/hook';
import { Person } from '../../interface/persons-interface';
import axios from 'axios';

function MovieDrawer(props:any) {

  const { persons } = useAppSelector((state:any) => state.persons);

  const [actors, setActors] = useState<[Person]>()
  const [directors, setDirectors] = useState<[Person]>()

  const [formData, setFormData] = useState(
    {
      movieName:'',
      actor:'',
      director:'',
      budget:''

    }
  )

  useEffect(() =>{
    filterUsers()
  }, [])

  const filterUsers = () =>{
    const actors =  persons.filter((person:Person) => person.role === 'Actor');
    const director =  persons.filter((person:Person) => person.role === 'Director');
    setActors(actors)
    setDirectors(director)
  }

  const handleInputChange = (event:any) =>{
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  }

  const handleCancel = () =>{
    props.handelCloseMovie()
  }

  const handleSave =() =>{
    console.log(formData)
    const sendData = {
      Name:formData.movieName,
      Actor: '',
      Director: '',
      Budget:formData.budget,
      director_id:formData.director,
      actor_id: formData.actor
    }
    axios.post('http://localhost:5000/api/movies/add', sendData).then((res) =>{
        if(res.status === 200){
          props.handelCloseMovie();
          
        }
    })
  }
  return (
    <>
      <Drawer anchor="right" open={props.isOpen} onClose={handleCancel}>
        <Box sx={{ width: 300, padding: 2 }}>
          <IconButton onClick={handleCancel} sx={{ float: 'right' }}>
            <Close></Close>
          </IconButton>
          <h2>Movie Form</h2>
          <TextField
            label="Movie Name"
            name="movieName"
            value={formData.movieName}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />
          <FormControl fullWidth margin="normal">
            <InputLabel>Actor</InputLabel>
            <Select
              name="actor"
              value={formData.actor}
              onChange={handleInputChange}
            >
              {
                actors?.map((actor:Person) =>
                  <MenuItem value={actor.id} key={actor.id}>{actor.username}</MenuItem>
                )
              }
            </Select>
          </FormControl>
          <FormControl fullWidth margin="normal">
            <InputLabel>Director</InputLabel>
            <Select
              name="director"
              value={formData.director}
              onChange={handleInputChange}
            >
             {
                directors?.map((director:Person) =>
                  <MenuItem value={director.id} key={director.id}>{director.username}</MenuItem>
                )
              }
            </Select>
          </FormControl>
          <TextField
            label="Budget"
            name="budget"
            value={formData.budget}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
            type="number"
          />
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
            <Button variant="contained" color="primary" onClick={handleSave}>
              Save
            </Button>
            <Button variant="outlined" onClick={handleCancel}>
              Cancel
            </Button>
          </Box>
        </Box>
      </Drawer>
    </>
  )
}

export default MovieDrawer
