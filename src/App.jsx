import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { useRecoilState } from "recoil";
import { userPersistanceState } from "./recoil";
import LoginPage from "./components/LoginPage";
import HomePage from "./components/HomePage";
import ProtectedRoute from "./ProtectedRoute";
import Page1 from "./components/Page1";
import ReactTable from "./components/ReactTable";
import Maps from "./components/Maps";

const App = () => {
  const [user, setUser] = useRecoilState(userPersistanceState);
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={user ? <Navigate to="/home" /> : <LoginPage />}
        />
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <HomePage />
            </ProtectedRoute>
          }
        />
        <Route path="/page1" element={<Page1 />} />
        <Route path="/table" element={<ReactTable />} /> 
        <Route path="/map" element={<Maps />} />
      </Routes>
    </Router>
  );
};

export default App;
