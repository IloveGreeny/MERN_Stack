import {useEffect} from "react";
import {CountryDetails} from "../../Componets/CountryDetails/CountryDetails"
import {CountryForm} from "../../Componets/CountryForm/CountryForm";
import {UseCountriesContext} from "../../Hooks/UseCountriesContext/UseCountriesContext";

export default function Home() {
    const {countries , dispatch } = UseCountriesContext()

    useEffect(()=> {
        const fetchCountries = async () => {
            const res = await fetch("/api/countries");
            const json = await res.json();

            if(res.ok) {
                dispatch({type:"SET_COUNTRIES",payload: json})
            }
        }

        fetchCountries()
    },[dispatch])

    return (
        <div>
            <div>
                {countries && countries.map((country) => (
                    <CountryDetails key={country._id} country={country}/>
                ))}
            </div>
            <div>
                <CountryForm/>
            </div>
        </div>
    )
}