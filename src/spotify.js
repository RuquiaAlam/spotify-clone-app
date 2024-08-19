//https://developer.spotify.com/documentation/web-api/tutorials/code-flow
//https://developer.spotify.com/documentation/web-playback-sdk
export const authEndPoint = "https://accounts.spotify.com/authorize";
const redirectUri = "http://localhost:3001";
const clientId = "c7f36ed67988468bbd86924a6ec97c20";

// step1 click login button
// step 2️⃣redirect to spotify login page
// step 3  redirect to home page once authorize

const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];
export const getTokenFromUrl=()=>
{
    return window.location.hash.substring(1).split("&").reduce((initial,item)=>
    {
        var parts=item.split("=");
        initial[parts[0]]=decodeURIComponent(parts[1])
        return initial
    },{})
}
export const loginUrl = `${authEndPoint}?client_id=${clientId}&redirect_uri=${redirectUri}
&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;
//space ascii ="%20"
