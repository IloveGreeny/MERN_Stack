export  const CountryDetails = ({country}) => {
  return(
      <div className={"country-details"}>
          <h4>{country.title}</h4>
          <p><strong>Capital:</strong>{country.capital}</p>
          <p><strong>Weather:</strong>{country.weather}</p>
          <p><strong>Created At:</strong>{country.createdAt}</p>
      </div>
  )
};

