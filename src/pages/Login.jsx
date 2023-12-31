import { useState } from "react";
import BreadcrumbComponent from "../components/Breadcrumb";

const LoginPage = () => {
  const [username, updateUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [users, setUsers] = useState([
    {
      username: "shaxzod",
      password: "12345678",
      age: 24,
    },
    {
      username: "bekhzod",
      password: "11111111",
      age: 26,
    },
  ]);

  const login = () => {
    // let userFound = false;

    // for (let index = 0; index < array.length; index++) {
    //   const user = array[index];
    //   if (user.username == username && user.password == password) {
    //     userFound = true;
    //   }
    // }

    // for (const user of users) {
    //   if (user.username == username && user.password == password) {
    //     userFound = true;
    //   }
    // }

    // users.map((obj) => {
    //   if (obj.username == username && obj.password == password) {
    //     userFound = true;
    //   }
    // });

    // users.forEach(obj => {
    //   if (obj.username == username && obj.password == password) {
    //     userFound = true;
    //   }
    // });

    // const userFound = users.filter(
    //   (obj) => obj.username == username && obj.password == password
    // );

    const userFound = users.find(
      (obj) => obj.username == username && obj.password == password
    );

    // if (username == "shaxzod" && password == "12345678") {
    //   setLoggedIn(true);
    // } else {
    //   alert("Login Failed");
    //   console.log("Login failed");
    // }
  };

  return (
    <div className="container">
      <BreadcrumbComponent page="Login" />
      <div className="logincontainer">
        {loggedIn ? (
          <div>
            <h1>Login Successful</h1>
          </div>
        ) : (
          <div className="w-25">
            <h3 className="my-3">Login</h3>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Username:
              </label>
              <input
                type="email"
                className="form-control"
                aria-describedby="emailHelp"
                onChange={(e) => {
                  updateUsername(e.target.value);
                }}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
            <button
              className="btn btn-primary btn-lg"
              id="login-submit"
              onClick={login}
            >
              Login
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
export default LoginPage;
