import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
     <Auth0Provider domain="dev-2us2evuu8jlg20ie.us.auth0.com"
     clientId="JR55Sybmk7l27jtH3bCEUmvlhDzH6POD"
     clientSecret="Lp4eBEr9nfnY7EcasOqbMqkvixDz-s6DsC0MfUCQvg00UKVS1aiAAwH1OfLS4V_Y"
     authorizationParams={{
      redirect_url :"http://localhost:5173"
     }}
     audience="http://localhost:8000" 
     scope="openid profile email">

     
     <App />
     </Auth0Provider>
   
  </React.StrictMode>
);
