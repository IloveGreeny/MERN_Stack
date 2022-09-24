import {createContext , useReducer} from "react";


export const CountryContext = createContext();

export const countriesReducer = (state,action) => {
    switch (action.type) {
        case "SET_COUNTRIES":
            return{
                countries: action.payload
            }
        case "CREATE_COUNTRY":
            return {
                countries: [action.payload,...state.countries]
            }
        default:
            return state
    }
}

export const CountryContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(countriesReducer, {
        countries: null
    });

    return(
        <CountryContext.Provider value={{...state, dispatch}}>
            {children}
        </CountryContext.Provider>
    )
}