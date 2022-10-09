import {CountryContext} from "../../Context/CountryContext/CountryContext";
import {useContext} from "react";


export const UseCountriesContext = () => {
    const context = useContext(CountryContext);

    if(!context) {
        throw new Error("UseCountriesContext not working");
    }

    return context;
}