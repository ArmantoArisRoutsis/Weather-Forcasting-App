import React from 'react'
import "./Today.css"


const Today = ({city,date,temp,description}) => {
    return (
        <>
            <div className="location-box">
                <div className="location">{city}</div>
                <div className="date">{date}</div>
            </div>
            <div className="weather-box">
                <div className="temp">{temp}°c</div>
                <div className="weather">{description}</div>
            </div>
        </>
    )
}

export default Today
