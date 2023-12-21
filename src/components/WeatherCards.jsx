import styles from "../components/Weather.module.css";


export default function WeatherCard(props) {
//#576EA5

  return (
    <div className="weatherCard">
      <div style={{ marginTop: "50px" }}>
        <h4 style={{ marginTop: "-70px", marginBottom: "70px" }}>
          Current Weather
        </h4>
        <h3 style={{ color: "#0056b3", marginTop: '-25px' }}>{props.name.toUpperCase()}</h3>
        <div style={{width:'180px', display:'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '-15px'}}>
          {props.temp >= 20 ? (
            <img
              style={{ width: "50px", height: '50px'}}
              src="https://static.vecteezy.com/system/resources/previews/009/266/750/original/sun-icon-design-free-png.png"
              alt=""
            />
          ) : (
            <img
              style={{ width: "70px", height: "50px" }}
              src="https://cdn-icons-png.flaticon.com/512/6643/6643186.png"
              alt=""
            />
          )}
          <h1 style={{ color: "#4D6FA1", fontWeight: "300", fontSize: "44px" }}>
            {props.temp} °C
          </h1>
        </div>
      </div>
      <div style={{ marginTop: "-20px" }}>
        <p style={{ color: "#999DA1", fontWeight: "500" }}>
          Humidity: {props.humidity} °C
        </p>
        <p style={{ color: "#999DA1", fontWeight: "500" }}>
          Minimum temp: {props.min_temp} °C
        </p>
        <p style={{ color: "#999DA1", fontWeight: "500" }}>
          Maximum temp: {props.max_temp} °C
        </p>
      </div>
    </div>
  );
}
