import { useState } from "react";
import BreadcrumbComponent from "../components/Breadcrumb";

const RegisterPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const register = () => {
    console.log({ name: username, password: password, email: email });
  };

  return (
    <div className="container">
      <BreadcrumbComponent page="Register" />
      <div className="logincontainer">
        <div className="w-25 " id="regisration-form">
          <h3 className="my-3">Create a Movie-TV account</h3>

          <div className="mb-3">
            <label htmlFor="username" className="form-label">
              Username
            </label>
            <input
              type="text"
              className="form-control"
              id="username"
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              aria-describedby="emailHelp"
              onChange={(e) => {
                setEmail(e.target.value);
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
              id="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary btn-lg"
            id="register-submit"
            onClick={register}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
