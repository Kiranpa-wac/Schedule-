import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { RecoilRoot } from "recoil";
import "./index.css";
import App from "./App.jsx";
import { ChakraProvider } from "@chakra-ui/react";

const CLIENT_ID =
  "620168704348-k5gpv2totdo957aha9pdrdalknfldo10.apps.googleusercontent.com";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RecoilRoot>
      <ChakraProvider>
        <GoogleOAuthProvider clientId={CLIENT_ID}>
          <App />
        </GoogleOAuthProvider>
      </ChakraProvider>
    </RecoilRoot>
  </StrictMode>
);
