import "./App.css";
import { useState, useEffect, useRef } from "react";
import WeatherCard from "./components/WeatherCards";



function App() {
  const [data, setData] = useState({});
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef();
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://api.api-ninjas.com/v1/weather?city=${
          inputValue ? inputValue : ''
        }`,
        { headers: { "X-Api-Key": "o3jtonGSmasHb0+OP8VgGw==Zk41JKshWl9F4lHM" } }
      );
      if (response.ok) {
        const info = await response.json();
        setData(info);
      }
      setLoading(false);
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, [inputValue]);

  const handleButtonClick = () => {
    setInputValue(inputRef.current.value);
    inputRef.current.value = '';
  };
 

 
  return (
    <div className="App">

   
      <img style={{position:'relative', width: '100%',   height: '100vh', opacity: '0.5'}} src='https://images.pexels.com/photos/1431822/pexels-photo-1431822.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'></img>
      <h1 style={{position:'absolute', top: '10px', color: '#4B6FA6', padding:'10px' }}>React Weather App ☀️</h1>
     <div style={{width: '700px', height:'600px', position:'absolute', top: '120px', zIndex: '1', right: '30%', }}>
     <input placeholder="Search for a city..." ref={inputRef} ></input>
      <button onClick={handleButtonClick}>Search</button>

      {loading ? (
        <h1>Loading...</h1>
      ) : inputValue &&(
        <WeatherCard {...data} name={inputValue}></WeatherCard>
      )}
     </div>
    </div>
  );
}

export default App;
