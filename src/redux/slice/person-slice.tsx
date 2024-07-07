import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


// Async thunk for loading users
export const fetchPersons = createAsyncThunk('users/fetchPersons', async () => {
    const response = await axios.get('http://localhost:5000/api/users');
    return response.data;
  });


const initialState = {
    persons: [],
    isLoading: false,
    error: null 
};



const movieSlice = createSlice({
    name: 'Persons',
    initialState,
    reducers:{},
    extraReducers: (builder) =>{
        builder
        .addCase(fetchPersons.pending, (state) => {
          state.isLoading = true;
          state.error = null;
        })
        .addCase(fetchPersons.fulfilled, (state, action) => {
          state.isLoading = false;
          state.persons = action.payload;
        })
    }

    }
)


//   const getPersons =() =>{
//     fetch('http://localhost:5000/api/users')
//         .then((response) => response.json())
//         .then((res) => {
//             dispatch(setPersons(res));
//         } 
//     );
//   }

// export const { setPersons } = movieSlice.actions;

// Export the reducer
export default movieSlice.reducer;