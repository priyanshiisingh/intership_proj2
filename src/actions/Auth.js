import jwt from "jsonwebtoken";
import axios from "axios";
import { toast } from "react-hot-toast";

export const loginUser = (email, password) => async (dispatch) => {
  try {
    const base_Url = "http://localhost:3003";
    //include the ngrock url
    const res = await axios.post(`${base_Url}/api/v1/login`, {
      email,
      password,
    });
    const { token, message } = res.data;

    if (token) {
      toast.success("Login Success");
      // save token to the local storage
      localStorage.setItem("token", token);
      dispatch({
        type: "LOGIN_SUCCESS",
        payload: { token },
      });
    } else {
      toast.error(message);
      dispatch({
        type: "LOGIN_FAILED",
        payload: { token: null },
      });
    }
  } catch (error) {
    console.log(error.message);
    toast.error(error.message);
  }
};
