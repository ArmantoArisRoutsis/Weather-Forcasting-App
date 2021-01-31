import React,{useState} from "react"

import {getToday, getBackground, getWeekDay} from "./functions/functions"

import Today from "./components/Today/Today"
import WeekDay from "./components/WeekDay/WeekDay"


const App = () => {
  const [query,setQuery] = useState("");
  const [weather,setWeather] = useState(null);

  const handleSearch = (e) =>{
    if(e.key === "Enter"){
      fetch(`https://api.weatherbit.io/v2.0/forecast/daily?city=${query}&key=${API_KEY}`)
      .then(res=>res.json())
      .then(result =>{
        setWeather(result)
        setQuery("")
      })  
    }
  }

  return (
    <div className={weather?getBackground(weather.data[0].temp):"app"}>
      <main>
        <div className="search-box">
          <input type="text" className="search-bar" placeholder="Search..." onChange={e => setQuery(e.target.value)} value={query} onKeyPress={handleSearch}/>
        </div>
        {weather&&(<>
        <Today city={weather.city_name} date={getToday(new Date())} temp={Math.round(weather.data[0].temp)} description={weather.data[0].weather.description}/>
        <h3 className="comming-days">Comming Days</h3>
        <div className="weekly-weather-box">
          {[1,2,3,4,5,6].map(i=><WeekDay date={getWeekDay(new Date(),i)} temp={weather.data[i].temp} icon={weather.data[i].weather.icon} description={weather.data[i].weather.description}/>)}
        </div>
        </>)}
      </main>
    </div>
  );
}

export default App;
