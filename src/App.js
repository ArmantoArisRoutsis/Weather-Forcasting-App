import React,{useState,useEffect} from "react"


const App = () => {
  const [query,setQuery] = useState("");
  const [weather,setWeather] = useState(null);

  const search = (e) =>{
    if(e.key === "Enter"){
      fetch(`https://api.weatherbit.io/v2.0/forecast/daily?city=${query}&key=${API_KEY}`)
      .then(res=>res.json())
      .then(result =>{
        setWeather(result)
        setQuery("")
        console.log(weather)
      })
      
    }
  }

  const getToday = (d) =>{
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()]
    let date = d.getDate();
    let month = months[d.getMonth()]
    let year = d.getFullYear()

    return `${day} ${date} ${month} ${year}`
  }

  const getBackground =(temp)=>{
    if(temp<0){
      return "app cold"
    }
    else if(temp>20){
      return "app warm"
    }
    else{
      return "app"
    }
  }

  return (
    <div className={weather?getBackground(weather.data[0].temp):"app"}>
      <main>
        <div className="search-box">
          <input type="text" className="search-bar" placeholder="Search..." onChange={e => setQuery(e.target.value)} value={query} onKeyPress={search}/>
        </div>
        {weather&&(<><div className="location-box">
          <div className="location">{weather.city_name}</div>
          <div className="date">{getToday(new Date())}</div>
        </div>
        <div className="weather-box">
          <div className="temp">{Math.round(weather.data[0].temp)}°c</div>
          <div className="weather">{weather.data[0].weather.description}</div>
        </div>
        <div className="weekly-weather-box">
          {weather.data[0].weather.icon&&[1,2,3,4,5,6].map(i=><div className="day">
            <h4>{weather.data[i].datetime}</h4>
            <h2>{Math.round(weather.data[i].temp)}°c</h2>
            <img src={"https://www.weatherbit.io/static/img/icons/"+weather.data[i].weather.icon+".png"}/>
            <h3>{weather.data[i].weather.description}</h3>
          </div>)}
        </div>
        </>)}
      </main>
    </div>
  );
}

export default App;
