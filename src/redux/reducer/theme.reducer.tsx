import { SETTHEME } from "../actions/theme.actions";

interface State {
    isDark:boolean
}

const initialState:State = {
    isDark:false
}

const ThemeReducer = (state = initialState, action:any) => {
    console.log(action)
    switch (action.type) {
        case SETTHEME:
        return{
            ...state,
            isDark: action.payload
        }
        default:
        return state    
    }
    

}

export default ThemeReducer;