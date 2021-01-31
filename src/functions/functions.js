let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]


export const getToday = (d) =>{
  let day = days[d.getDay()]
  let date = d.getDate();
  let month = months[d.getMonth()]
  let year = d.getFullYear()

  return `${day} ${date} ${month} ${year}`
}

export const getBackground =(temp)=>{
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

export const getWeekDay =(d, i)=>{ 
  if(i<7){
    return days[d.getDay()+i]
  }
  else{
    return days[d.getDay()+(i-7)]
  }
}