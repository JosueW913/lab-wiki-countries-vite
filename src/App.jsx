import { Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import axios from 'axios';
import { useState, useEffect } from 'react';
import Navbar from "./components/Navbar";
import CountryDetailsPage from "./pages/CountryDetailsPage";


function App() {

  const [countries, setCountries] = useState([]);

  useEffect(() => {

    axios.get('https://ih-countries-api.herokuapp.com/countries')
      .then((response) => {
        console.log("Countries:", response.data)
        setCountries(response.data)
      })
      .catch((err) => {
        console.log(err)
      })

  }, []);

  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage countries={countries} />} />
        <Route path="/:countryId" element={<CountryDetailsPage countries={countries} />} />
      </Routes>

    </div>
  );
}

export default App;
