import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  SET_MESSAGE,
  OTP_SUCCESS,
  OTP_FAIL,
  LOGIN_REQUEST,
} from "../constants/userConstants";

import AuthService from "../service/AuthService";
import { toast } from "react-toastify";

export const loginNew = (token, navigate) => async (dispatch) => {
  dispatch({
    type: LOGIN_REQUEST,
  });
  return await AuthService.login(token).then(
    (data) => {
      if (data.data.sessionGuid) {
        console.log(data.data.sessionGuid);
        dispatch({
          type: LOGIN_SUCCESS,
          payload: {
            user: data.data.userID,
            userName: data.data.username,
            sessionGuid: data.data.sessionGuid,
            userType: data.data.userType,
          },
        });

        localStorage.setItem("user", JSON.stringify(data.data.userID));
        localStorage.setItem("userType", JSON.stringify(data.data.userType));
        localStorage.setItem(
          "sessionGuid",
          JSON.stringify(data.data.sessionGuid)
        );
        navigate(`/`);
      } else {
        dispatch({
          type: LOGIN_FAIL,
          payload: {},
        });

        toast.error("Not Registed User!");
      }
      return Promise.resolve();
    },
    (error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: LOGIN_FAIL,
        payload: { error: message },
      });
      return Promise.reject();
    }
  );
};

export const logOut = async (navigate) => {
  console.log("chanka");
  await localStorage.removeItem("user");
  await localStorage.removeItem("sessionGuid");
  navigate(`/login`);
  return Promise.resolve();
};

export const checkVerification = (isDone, user, navigate) => (dispatch) => {
  setTimeout(() => {
    if (isDone) {
      dispatch({
        type: OTP_SUCCESS,
        payload: { user: user },
      });
      //localStorage.setItem("user", JSON.stringify(user));
      // console.log("cookie " + user)
      //  navigate(`/`);
    } else {
      dispatch({
        type: OTP_FAIL,
        payload: { error: "Invalid OTP Code." },
      });
      toast.error("Invalid OTP Code.");
    }
    return Promise.resolve();
  }, 1000);
};
