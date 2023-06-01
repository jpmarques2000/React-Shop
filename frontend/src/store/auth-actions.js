import axios from "axios";
import { uiActions } from "./ui-slice";
import { authActions } from "./auth-slice";

axios.defaults.withCredentials = true;

export const register = (user) => {
  return async (dispatch) => {
    const registerNewUser = async () => {
      await axios
        .post("http://localhost:8800/register/", {
          username: user.username,
          password: user.password,
        })
        .then((response) => {
          const { data } = response;
          console.log(data);
        });
    };
    try {
      await registerNewUser();
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Failed to create new user",
        })
      );
    }
  };
};

export const login = (user) => {
  return async (dispatch) => {
    const sendLoginRequest = async () => {
      await axios
        .post("http://localhost:8800/login/", {
          username: user.username,
          password: user.password,
        })
        .then((response) => {
          if (response.data.message) {
            console.log(response.data.message);
          } else {
            dispatch(
              authActions.userLogin({
                username: response.data.user[0].username,
                isLoggedIn: true,
              })
            );
          }
        });
    };
    try {
      await sendLoginRequest();
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Failed to log user in",
        })
      );
    }
  };
};

export const verifyIsUserLoggedIn = () => {
  return async (dispatch) => {
    const verifyLogin = async () => {
      await axios.get("http://localhost:8800/login/").then((response) => {
        if (response.data.userIsLoggedIn === true) {
          dispatch(
            authActions.userLogin({
              username: response.data.user[0].username,
              isLoggedIn: true,
            })
          );
        }
      });
    };
    try {
      await verifyLogin();
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Failed to log user in",
        })
      );
    }
  };
};
