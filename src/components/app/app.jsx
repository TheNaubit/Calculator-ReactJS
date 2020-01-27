import React from "react";
// Let's import the weather component
import Weather from "./../weather/weather";

// And import the CloudsBackground component
import CloudsBackground from "./../cloudsBackground/cloudsBackground";

// And the component's style
import "./app.scss";

// Of course, import the Utils!
import * as Utils from "./../../utils/functions";

// This is the API key used to get the weather data
const apiKey = "8ddceeacaf8b95fe943c88fc8389dee0";

const Title = () => {
  return (
    <div>
      <h1 className="title-container__title">Weather Finder in ReactJS!</h1>
      <h3 className="title-container__subtitle">
        Find the current weather in any city!
      </h3>
    </div>
  );
};

const Form = ({ onWeather }) => {
  return (
    <form onSubmit={e => onWeather(e)}>
      <input type="text" name="city" placeholder="City..." />
      <input type="text" name="country" placeholder="Country..." />
      <button className="form-button">Get Weather!</button>
    </form>
  );
};

class App extends React.Component {
  // We have to set an 'undefined' initial state
  // meanwhile we get the weather's data
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  };

  // With this function we will send a request to the API
  // and format the response to fit our state
  // Using async!!
  getWeather = async e => {
    e.preventDefault();
    const city = e.currentTarget.elements.city.value;
    const country = e.currentTarget.elements.country.value;

    // If a city and country have been specified by the user
    if (city && country) {
      try {
        // Note: We have to use cors-anywhere since it enables
        // cross-origin requests to anywhere
        const apiCall = await fetch(
          `https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apiKey}&units=metric`
        );

        // We parse the response
        const data = await apiCall.json();
        const { main, sys, name, weather, timezone } = data;

        const city_hour = Utils.getCityTimeWithTimezone(timezone).getHours();
        console.log("Hour: "+city_hour);

        console.log(data);
        // And assign the parsed data to our state
        this.setState({
          temperature: main.temp,
          city: name,
          country: sys.country,
          humidity: main.humidity,
          description: weather[0].description,
          error: ""
        });
      } catch (ex) {
        console.log(ex.message);
      }
      // If no city and country have been specified by the user
    } else {
      // Just set our state data empty
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: "please enter a valid values."
      });
    }
  };

  // Now let's code the render function for this component
  render() {

    // Remeber I use <> and </> to create an empty root element
    return (
      <>
        <CloudsBackground />
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="title-container">
                  <Title />
                </div>
                <div className="form-container">
                  <Form onWeather={this.getWeather} />
                  <Weather
                    temperature={this.state.temperature}
                    city={this.state.city}
                    country={this.state.country}
                    humidity={this.state.humidity}
                    description={this.state.description}
                    error={this.state.error}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default App;