import { useState } from "react"

import axios from "axios";

function Weather(){
    const [city,setcity]=useState([""])
    const [weather,setweather]=useState([""])
    const [temperature,settemperature]=useState([""])
    const [description,setdescription]=useState([""])
    function handlecity(event){
        setcity(event.target.value)
    }

 
    function getWeather(){     
        var weatherdata = axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=2ff0b1383977a2accc3c53904cca95b4`)
        weatherdata.then(function(success){
            console.log(success.data)
            setweather(success.data.weather[0].main)
            settemperature(success.data.main.temp)
            setdescription(success.data.weather[0].description)
        }).catch(function(errmsg){
            console.log(errmsg)
        })

    }
    return(
        
        <div className="bg-black p-20">
        <div className="bg-amber-500 p-10 rounded-md">
            <h1 className="text-2xl font-extrabold">Weather Report</h1>
            <p className="bg-amber-200 max-w-fit">I Can Give You A Weather Report About Your City!</p>
            <input type="text" value={city} onChange={handlecity} className="mt-2 border border-black rounded-md p-1 bg-white outline-2px solid black" placeholder="Enter city Name"/>
            <button className="hover:bg-black bg-amber-50 text-gray-400 p-2 rounded-md mt-2 block " onClick={getWeather}>Get Report</button>
                        
            <div className="mt-2 pl-2 bg-amber-300 bg-blend-color-burn max-w-70">
                <h1><b>Weather : </b>{weather}</h1>
                <p><b>Temperature : </b>{temperature}</p>
                <p><b>Description : </b>{description}</p>
            </div>
        </div>
        </div>
    )
}

export default Weather