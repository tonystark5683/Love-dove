import "./App.css";
import Profile from "./Components/Profile/Profile";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
function App() {
  const [userstate, setUserState] = useState({});
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route
            path="/"
            // element={
            //   userstate && userstate._id ? (
            //     <Profile
            //       setUserState={setUserState}
            //       username={userstate.fname}
            //     />
            //   ) : (
            //     <Login setUserState={setUserState} />
            //   )
            // }
            element={
            
                <Profile
                  setUserState={setUserState}
                  username={userstate.fname}
                />
              
            }
          ></Route>
          <Route
            path="/login"
            element={<Login setUserState={setUserState} />}
          ></Route>
          <Route path="/signup" element={<Register />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
