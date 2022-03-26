import { Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { useEffect, useState } from "react";
import { GetAuth } from "./ReduxAuth/CRUD";
import { useDispatch } from "react-redux";
import * as acAuth from "./ReduxAuth/Redux";
import { useNavigate } from "react-router-dom";

function Auth() {
  const dispatch = useDispatch();
  const nav = useNavigate();

  const [finalData, setFinalData] = useState({
    username: "admin",
    password: "admin",
  });

  function loginHandler(e) {
    e.preventDefault();
    if (finalData.username !== "" && finalData.password !== "") {
      GetAuth(finalData)
        .then((res) => {
          if (res.data.code == 200) {
            dispatch(acAuth.actions.acLogin(res.data));
            setTimeout(() => nav("/app", { replace: true }), 3000);

            //nav('/app',{replace:true})
          }
          //setStatus(res.data);
        })
        .catch(() => {
          console.log("error auth");
        });
    } else {
      alert("username&password tidak boleh kosong");
    }
  }

  const userChangeHandler = (e) => {
    setFinalData({
      username: e.target.value,
      password: finalData.password,
    });
  };

  const passwordChangeHandler = (e) => {
    setFinalData({
      username: finalData.username,
      password: e.target.value,
    });
  };

  return (
    <div className="Container">
      <div className="login-container">
        <h2>Login</h2>
        <span>Silahkan masukkan informasi login</span>
        <br />

        <Form onSubmit={(e) => loginHandler(e)}>
          <Form.Group className="mb-3">
            <Form.Label className="mt-4">Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Masukkan username"
              onChange={(e) => userChangeHandler(e)}
              value={finalData.username}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Masukkan Password"
              onChange={(e) => passwordChangeHandler(e)}
              value={finalData.password}
            />
          </Form.Group>
          <Form.Group className="mb-3"></Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default Auth;
