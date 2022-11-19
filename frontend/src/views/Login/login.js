import Card from "react-bootstrap/Card";
import * as React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import backendServer from "../../webConfig";
import { Redirect } from "react-router";

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      user: "",
      userType: "Customer",
      redirectFlag: false,
    };
  }

  handleUsername = (e) => {
    e.preventDefault();
    this.setState({
      username: e.target.value,
    });
  };

  handlePassword = (e) => {
    e.preventDefault();
    this.setState({
      password: e.target.value,
    });
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleLogin = (e) => {
    const { username, password, userType } = this.state;
    const user = {
      username: username,
      password: password,
      userType: userType,
    };
    console.log(user);
    axios
      .post(`${backendServer}/v1/user/login`, user)
      .then((response) => {
        if (response.status === 200) {
          console.log(response.data);
          this.setState({
            user: response.data,
            redirectFlag: true,
          });
          window.sessionStorage.setItem("user", this.state.user.toString());
        } else {
          this.setState({ errorMsg: response.data });
        }
      })
      .catch((err) => {
        this.setState({ errorMsg: err });
      });
  };
  render() {
    let redirectVar = null;
    const user = this.state.user;
    if (this.state.redirectFlag) {
      redirectVar = <Redirect to={{ pathname: "/dashboard", user }} />;
    }
    return (
      <>
        {redirectVar}
        <div
          style={{
            "padding-top": "100px",
            "align-items": "center",
            "justify-content": "center",
          }}
        >
          {" "}
          <Card
            style={{
              "align-items": "center",
              "justify-content": "center",
            }}
          >
            <Card.Body>
              <Form>
                <Form.Group className="mb-1" controlId="formBasicEmail">
                  <Form.Label style={{ fontSize: "16px" }}>
                    Email address
                  </Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    size="sm"
                    onChange={this.handleUsername}
                  />
                </Form.Group>

                <Form.Group className="mb-1" controlId="formBasicPassword">
                  <Form.Label style={{ fontSize: "16px" }}>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    size="sm"
                    onChange={this.handlePassword}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Check
                    className="mr-sm-2"
                    inline
                    value="Customer"
                    defaultChecked="true"
                    label="Customer"
                    name="userType"
                    type="radio"
                    id="Customer"
                    onChange={this.handleChange}
                  />
                  <Form.Check
                    className="mr-sm-2"
                    inline
                    value="Employee"
                    label="Employee"
                    name="userType"
                    type="radio"
                    id="Employee"
                    onChange={this.handleChange}
                  />
                </Form.Group>
                <Button variant="primary" size="sm" onClick={this.handleLogin}>
                  Login
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </div>
      </>
    );
  }
}
