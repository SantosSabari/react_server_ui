import { LOADUSERS, LOADUSERSSUCCESS } from "../actions/app.actions";

const initialState = {
    users: [],
    isLoading: false
};

const userReducer = (state = initialState, action:any) => {
    switch (action.type) {
        case LOADUSERS:
            console.log(state);
            return{
                ...state,
            }
        case LOADUSERSSUCCESS:
            console.log(state);
            return{
                ...state,
                data: action.payload.users
            }
    
        default:
           return state
    }
}

export default userReducer;