import Login from "./components/auth/Login.js";
import { Toaster } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      // dispatch an action that modifies the store
      console.log(token);
      dispatch({
        type: "SET_AUTH_TOKEN",
        payload: { token },
      });
    }
  }, []);
  return (
    <div className="App">
      <Toaster />
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
