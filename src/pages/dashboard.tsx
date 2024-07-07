import React, { useEffect, useState } from 'react'
import { Person } from '../interface/persons-interface';
import PersonCard from '../components/person-card';
import { Movie } from '../interface/movies-interface';
import MovieCard from '../components/movie-card';
import { Add } from '@mui/icons-material';
import MovieDrawer from '../components/drawer/movie-drawer'

import { fetchPersons } from '../redux/slice/person-slice';
import { useAppDispatch, useAppSelector } from '../hooks/hook';



function Dashboard() {
  // const [persons, setPersons] = useState<[Person]>()
  const { persons, isLoading, error } = useAppSelector((state:any) => state.persons);
  const [movies, setMovies] = useState<[Movie]>()

  const [isOpenMovieDrawer, setOpenMovieDrawer] = useState(false);

  const dispatch = useAppDispatch()

  useEffect(() =>{
    console.log('dashboard dispatch')
    dispatch(fetchPersons());
    getMovies()
  }, [])

  
  const getMovies =() =>{
    fetch('http://localhost:5000/api/movies/')
        .then((response) => response.json())
        .then((res) => {
            setMovies(res)
        } 
    );
  }


  const addMovies =() =>{
    setOpenMovieDrawer(true)
  }

  const handelCloseMovie =() =>{
    setOpenMovieDrawer((prestate) => !prestate)
  }


  return (
    <>
      <section className="py-6">
        <div className="container mx-auto px-6">
            <div className='header flex justify-between'>
              <h2 className="text-3xl font-semibold text-center mb-8">Movies</h2>
              <button onClick={addMovies}><Add color="secondary" /></button>
            </div>
            
            <div className="flex flex-wrap justify-center">
                {
                  movies ? (
                    movies.map((movie:Movie) => 
                      <MovieCard movie={movie} key={movie.movieId}/>
                    )
                    
                  ) : <div className=''>No Movie found</div>
                }
            </div>
        </div>
    </section>

      <section className="py-6">
        <div className="container mx-auto px-6">
            <h2 className="text-3xl font-semibold text-center mb-8">Meet Our Team</h2>
            <div className="flex flex-wrap justify-center">
                {
                  persons ? (
                    persons.map((person:Person) => 
                      <PersonCard person={person} key={person.id}/>
                    )
                    
                  ) : <div className=''>No Data found</div>
                }
            </div>
        </div>
    </section>

      { isOpenMovieDrawer && <MovieDrawer isOpen={isOpenMovieDrawer} handelCloseMovie = {handelCloseMovie}/> }
    </> 
  )
}

export default Dashboard
