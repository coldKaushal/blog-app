// import { useEffect, useState } from "react";
import "./App.css";
import LandingPage from "./components/LandingPage/landing_page";
// import store from "./store/configStore";
// import { addUser } from "./store/tasks";

function App() {
  // useEffect(() => {
  //   // store.getState();
  //   store.dispatch(addUser({ name: "kaushal", email: "k" }));
  // }, []);
  return (
    <div className="box">
      <LandingPage />
    </div>
  );
}

export default App;
