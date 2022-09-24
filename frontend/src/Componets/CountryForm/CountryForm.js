import {useState} from "react";
import {UseCountriesContext} from "../../Hooks/UseCountriesContext/UseCountriesContext";

export const CountryForm = () => {
  const {dispatch} = UseCountriesContext();
  const [title,setTitle] = useState("");
  const [capital, setCapital] = useState("");
  const [weather, setWeather] = useState("");
  const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
    e.preventDefault();

    const country = {title,capital,weather};

    const res = await fetch("/api/countries",{
        method: "POST",
        body: JSON.stringify(country),
        headers: {
            "Content-Type": "application/json"
        }
    })
      const json = await res.json();

    if(!res.ok) {
        setError(json.error)
    }
    if(res.ok) {
        setTitle("");
        setCapital("");
        setWeather("");
        setError(null);
        console.log("new country added");
        dispatch({type:"CREATE_COUNTRY",payload: json})
    }
  }
    return (
      <form className="create" onSubmit={handleSubmit}>
          <h3>Add a new Country</h3>

          <label>Country's name:</label>
          <input
              type="text"
              onChange={(e)=> setTitle(e.target.value)}
              value={title}
          />

          <label>The Capital</label>
          <input
              type="text"
              onChange={(e)=> setCapital(e.target.value)}
              value={capital}
          />

          <label>Weather</label>
          <input
              type="text"
              onChange={(e)=> setWeather(e.target.value)}
              value={weather}
          />

          <button>Add a Country</button>
          {error && <div>{error}</div>}
      </form>
  )
}
