import { useEffect, useState } from "react";
import "./App.css";
import Login from "./Login";
import { getTokenFromUrl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./Player";
const spotify = new SpotifyWebApi();
function App() {
  //Run code based on a given condition
  //Runs when App component loads
  const [token, setToken] = useState(null);

  useEffect(() => {
    //code..
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      setToken(_token);
      spotify.setAccessToken(_token);
      spotify.getMe().then((user) => console.log(user));
    }
    console.log("I Have a token ", token);
  }, [name]);
  return (
    <div className="App">
      {/*spotify logo
      login button */}
      {token ? <Player/> : <Login />}
    </div>
  );
}

export default App;
