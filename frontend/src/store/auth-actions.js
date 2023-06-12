import axios from "axios";
import { uiActions } from "./ui-slice";
// import { authActions } from "./auth-slice";

axios.defaults.withCredentials = true;

export const register = (user) => {
  return async (dispatch) => {
    const registerNewUser = async () => {
      await axios
        .post("http://localhost:8080/register/", {
          username: user.username,
          password: user.password,
        })
        .then((response) => {
          console.log(response);
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

// export const login = (user) => {
//   return async (dispatch) => {
//     const sendLoginRequest = async () => {
//       await axios
//         .post("http://localhost:8080/login/", {
//           username: user.username,
//           password: user.password,
//         })
//         .then((response) => {
//           if (response.data.message) {
//             console.log(response.data.message);
//           } else {
//             localStorage.setItem("user", JSON.stringify(response.data));
//             const user = JSON.parse(localStorage.getItem("user"));
//             dispatch(
//               authActions.userLogin({
//                 username: user[0].username,
//               })
//             );
//           }
//         });
//     };
//     try {
//       await sendLoginRequest();
//     } catch (error) {
//       dispatch(
//         uiActions.showNotification({
//           status: "error",
//           title: "Error!",
//           message: "Failed to log user in",
//         })
//       );
//     }
//   };
// };

// export const verifyIsUserLoggedIn = () => {
//   return async (dispatch) => {
//     const verifyLogin = async () => {
//       await axios.get("http://localhost:8080/login/").then((response) => {
//         if (response.data.userIsLoggedIn === true) {
//           dispatch(
//             authActions.userLogin({
//               username: response.data.user[0].username,
//             })
//           );
//         }
//       });
//     };
//     try {
//       await verifyLogin();
//     } catch (error) {
//       dispatch(
//         uiActions.showNotification({
//           status: "error",
//           title: "Error!",
//           message: "Failed to log user in",
//         })
//       );
//     }
//   };
// };

export const logout = () => {
  localStorage.removeItem("user");
};
