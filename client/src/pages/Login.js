  import React, { useEffect, useState } from "react";
  import { Form, Input, Button,message } from "antd";
  import { Link,useNavigate } from "react-router-dom";
  import axios from "axios";
  import Spinner from "../components/Spinner";

  const Login = () => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    //from submit
    const submitHandler = async (values) => {
      try {
        setLoading(true);
        const { data } = await axios.post("/users/login", values);
        setLoading(false);
        message.success("login successfully");
        localStorage.setItem(
          "user",
          JSON.stringify({ ...data.user, password: "" })
        );
        navigate("/");
      } catch (error) {
        setLoading(false);
        message.error("something went wrong");
      }
    };
  
    //prevent for login user
    useEffect(() => {
      if (localStorage.getItem("user")) {
        navigate("/");
      }
    }, [navigate]);
    return (
      <div className="login-page">
        {loading && <Spinner/>}
        <Form layout="vertical" onFinish={submitHandler}>
          <h1>Login</h1>
          <Form.Item label="Email" name="email">
            <Input type="email" />
          </Form.Item>
          <Form.Item label="Password" name="password">
            <Input type="password" />
          </Form.Item>
          <div className="d-flex justify-content-between">
            <Link to="/register">No User? Click here to Register</Link>
            <Button type="primary" htmlType="submit">
              Login
            </Button>
          </div>
        </Form>
      </div>
    );
  };

  export default Login;
