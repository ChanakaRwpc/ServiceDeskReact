import {
  GETALLUSER_FAIL,
  GETALLUSER_REQUEST,
  GETALLUSER_SUCCESS,
} from "../constants/common";
import CommonService from "../service/CommonService";
import { toast } from "react-toastify";

export const GetAllUsers = () => async (dispatch) => {
  dispatch({
    type: GETALLUSER_REQUEST,
  });
  return await CommonService.GetAllUsers().then(
    (data) => {
      if (data.data.statusCode === 200) {
        dispatch({
          type: GETALLUSER_SUCCESS,
          payload: {
            userData: data.data.result,
          },
        });
      } else {
        dispatch({
          type: GETALLUSER_FAIL,
          payload: {},
        });

        toast.error("Data Not Found!");
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
        type: GETALLUSER_FAIL,
        payload: { error: message },
      });
      return Promise.reject();
    }
  );
};
