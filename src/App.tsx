import { useState } from "react";
import Title from "./components/Title";
import Form from "./components/Form"
import Results from "./components/Results";
import './App.css';

function App() {
  const [city,setCity]=useState<string>("");
    const getWeather =(e:any) => {
        e.preventDefault();
        fetch("http://api.weatherapi.com/v1/current.json?key=9f07072fb2644ee4927151038230210&q=London&aqi=no").then(res =>res.json()).then(data => console.log(data))
    }
  return (
    <div className="test">
      <Title />
      <Form setCity={setCity} getWeather={getWeather}/>
    </div>
  );
}

export default App;
