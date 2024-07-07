
import { useDispatch } from "react-redux";
import { ThunkAction } from 'redux-thunk';
import { Action,  } from 'redux';
import store from "../../store";
import { createAsyncThunk } from "@reduxjs/toolkit";

// src/redux/actions.js
export const LOADUSERS = 'LOAD_USER_DATA';
export const LOADUSERSSUCCESS = 'USER_DATA_SUCCESSFULLY_LOADED';

export const loadUsers = () => {
    return {
        type: LOADUSERS
    };
};


export const userLoadedSuccessFully = (data:any) => {
    return {
        type: LOADUSERSSUCCESS,
        payload: data
    };
};


export const fetchUsers = (): ThunkAction<void, typeof store, unknown, Action<string>> => {
    return async dispatch => {
        dispatch(loadUsers());
        try {
            const response = await fetch('http://localhost:5000/api/users');
            const data = await response.json();
            dispatch(userLoadedSuccessFully(data));
        } catch (error) {
            // Handle the error if you have a failure action
            // dispatch({ type: LOAD_USERS_FAILURE, payload: error.toString() });
        }
    };
};

// export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
//     const response = await fetch('https://dummyjson.com/users');
//     if (!response.ok) {
//       throw new Error('Failed to fetch users');
//     }
//     const data = await response.json();
//     return data;
//   });