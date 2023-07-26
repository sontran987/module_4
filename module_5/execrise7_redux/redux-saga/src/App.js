import React from "react";
import { fakeLogin } from "./redux/userAction";
import { useDispatch } from "react-redux";
// import GetUser from "./component/GetUser";
// import { useNavigate } from "react-router";

function App() {
  const dispatch = useDispatch();
  
  // const navigate = useNavigate();
  const login = () => {
    dispatch(fakeLogin());
    
  };
  return (
    <>
      <h1>
        User List
      </h1>
      {/* <GetUser /> */}
     <button onClick={login} >Get user</button>
    </>
  );
}

export default App;
