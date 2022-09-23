import {useState,useEffect} from "react";
import {CountryDetails} from "../../Componets/CountryDetails/CountryDetails"
import {CountryForm} from "../../Componets/CountryForm/CountryForm";

export default function Home() {
    const [countries,setCountries] = useState(null);

    useEffect(()=> {
        const fetchCountries = async () => {
            const res = await fetch("/api/countries");
            const json = await res.json();

            if(res.ok) {
                setCountries(json)
            }
        }

        fetchCountries()
    },[])

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