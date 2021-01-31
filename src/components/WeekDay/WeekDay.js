import React from 'react'
import "./WeekDay.css"

const WeekDay = ({date,temp,icon,description}) => {
    return (
        <div className="day">
            <h4>{date}</h4>
            <h2>{temp}°c</h2>
            <img src={"https://www.weatherbit.io/static/img/icons/"+icon+".png"}/>
            <h3>{description}</h3>
        </div>
    )
}

export default WeekDay
