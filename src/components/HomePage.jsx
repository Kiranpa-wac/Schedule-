import React from "react";
import { useRecoilState } from "recoil";
import { userPersistanceState } from "../recoil";
import "./HomePage.css";
import MyButton from "./MyButton";

const HomePage = () => {
  const [user, setUser] = useRecoilState(userPersistanceState);
  console.log(user.picture);
  return (
    <div className="logo-container">    
      <div className="top-right-button">
        <MyButton link='/page1' title='Page 1' />
        <MyButton link='/table' title='Table' />
        <MyButton link='/map' title='Go to Map' />

      </div>
      <div className="home-container">
        <h2>Welcome {user.name}</h2>
        <p>{user.email}</p>
        <img
          src={user.picture}
          alt="profile picture"
          style={{
            borderRadius: "100px",
            borderWidth: "solid",
          }}
        />
        <p>Hope you enjoyed your stay here bye!</p>
        <button onClick={() => setUser(null)}>Logout</button>
      </div>
    </div>
  );
};

export default HomePage;
