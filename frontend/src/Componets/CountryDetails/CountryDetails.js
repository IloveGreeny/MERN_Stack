import {UseCountriesContext} from "../../Hooks/UseCountriesContext/UseCountriesContext";

import {formatDistanceToNow} from "date-fns";

export  const CountryDetails = ({country}) => {
    const {dispatch} = UseCountriesContext();

    const handleClick = async () => {
        const res = await fetch("api/countries/" + country._id,{
            method: "DELETE"
        })
        const json = await res.json();

        if(res.ok) {
            dispatch({type:"DELETE_COUNTRY", payload:json});
        }
    }
  return(
      <div className={"country-details"}>
          <h4>{country.title}</h4>
          <p><strong>Capital:</strong>{country.capital}</p>
          <p><strong>Weather:</strong>{country.weather}</p>
          <p>{formatDistanceToNow(new Date(country.createdAt),{addSuffix:true})}</p>
          <span onClick={handleClick}>delete</span>
      </div>
  )
};

