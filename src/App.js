import { useState } from 'react';
import Header from './components/Header';
import Login from './components/Login';
// import Dashboard from './components/Dashboard';
import WelcomeBanner from './components/WelcomeBanner';
import CustomCard2 from './components/CustomCard2';
import SystemNotifications from './components/SystemNotifications';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [isOnline, setOnline] = useState(true)
  // const [isUser, setIsUser] = useState("User")
  const [isVolume, setVolume] = useState(50)
  const [isQuality, setQuality] = useState('Normal');


  // TO handle volume change
  const handleSliderChange = (event, value) => {
    setVolume(value)
    console.log("Slider changed to", value)
  }

  // // TO handle drop down change
  const handleDropdownChange = (event) => {
    setQuality(event.target.value)
    console.log("Dropdown change to", event.target.value)
  }

  // Array for Quality Options
  const options = ['Normal', 'High', 'Low'];

  return (
    <div className="App">
      <Header />
      {isLoggedIn == true ? (
        <>
        <WelcomeBanner/>
        {/* <Dashboard /> */}
        <CustomCard2 
          title="Online Mode" 
          body="Is this application connected to the internet?"
          type="toggle"
          text="Toggle"
          handleChange={setOnline}
        />

        <CustomCard2 
          title="Master Volume" 
          body="Overrides all other sound settings in this application"
          type="slider"
          text="Slider"
          onSliderChange={handleSliderChange}
        />

        <CustomCard2 
          title="Sound Quality" 
          body="Manually control the music qualty in the event of poor connection"
          type="dropdown"
          text="Dropdown"
          onDropdownChange={handleDropdownChange}
          dropDownOptions={["Normal", "High", "Low"]}
        />

        <SystemNotifications />


        {!isOnline && (
          <p>
            Your application is offline. You won't be able to share or stream music to other devices.
          </p>
        )}

        {isVolume > 75 && (
          <p>Listening to music at a high volume could cause long-term hearing loss.</p>
        )}

        {isQuality == 'Low' && (
          <p>Music quality is degraded. Increase quality if your connection allows it.</p>
        )}
        </>
      ) : (
        <Login handleClick={setIsLoggedIn}/>
      )}
    </div>
  );
}

export default App;
