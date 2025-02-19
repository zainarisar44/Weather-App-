import {useEffect, useState} from "react";

const WeatherCard = ({ tempInfo }) => {
    const [weatherState,setWeatherState]=useState("")
  const {
    temp,
    humidity,
    pressure,
    weathermood,
    name,
    speed,
    country,
    sunset,
  } = tempInfo;

useEffect(()=>{
if(weathermood){
    switch(weathermood){
        case "Clouds":setWeatherState("wi-day-cloudy");
        break;
        case "Haze":setWeatherState("wi-fog");
        break;
        case "Hail":setWeatherState("wi-hail");
        break;
        case "Clear":setWeatherState("wi-day-sunny");
        break;
        case "Mist":setWeatherState("wi-dust");
        break;
        case "Snow":setWeatherState("wi-snow");
        break;
        case "Rain":setWeatherState("wi-rain");
        break;
        case "Drizzle":setWeatherState("wi-sleet");
        break;
        case "Thunderstorm":setWeatherState("wi-thunderstorm");
        break;
        default:setWeatherState("wi-day-sunny");
        break;
    }
}
},[weathermood])


  let sec=sunset;
  let date=new Date(sec*1000);
  let timeStr=`${date.getHours()}:${date.getMinutes()}`


  return (
    <>
      <article className="widget">
        <div className="weatherIcon">
          <i className={`wi ${weatherState}`} />
        </div>

        <div className="weatherInfo">
          <div className="temperature">
            <span>{temp}°C </span>
          </div>
          <div className="description">
            <div className="weatherCondition">{weathermood}</div>
            <div className="place">{name},{country}</div>
          </div>
        </div>

        <div className="date">{new Date().toLocaleString()}</div>

        <div className="extra-temp">
          <div className="temp-info-minmax">
            <div className="two-sided-section">
              <p>
                <i className={"wi wi-sunset"} />
              </p>
              <p className="extra-info-leftside">
                Sunset
                <br />
                {timeStr}
              </p>
            </div>
            <div className="two-sided-section">
              <p>
                <i className={"wi wi-humidity"} />
              </p>
              <p className="extra-info-leftside">
                Humidity
                <br /> {humidity}
              </p>
            </div>
          </div>

          <div className="weather-extra-info">
            <div className="two-sided-section">
              <p>
                <i className={"wi wi-strong-wind"} />
              </p>
              <p className="extra-info-leftside">
                Speed
                <br /> {speed}
              </p>
            </div>
            <div className="two-sided-section">
              <p>
                <i className={"wi wi-rain"} />
              </p>
              <p className="extra-info-leftside">
                Pressure
                <br /> {pressure}
              </p>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default WeatherCard;
