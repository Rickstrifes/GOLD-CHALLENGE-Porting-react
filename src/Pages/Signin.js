import React from "react";
import "./Signin.css";
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Landing from "../Assets/Landing.png";

const Signin = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Kirim data email dan password ke server atau eksekusi aksi lainnya
    console.log("email:", email);
    console.log("password:", password);
  };

  return (
    <Container fluid="xl">
      <Row className="kiri">
        <Col className="loginkiri">
          <div className="logo"></div>
          <h1 className="welcomeback">Welcome Back!</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-group mb-3">
              <label className="text-start pb-3">Email</label>
              <input type="email" placeholder="Contoh: johndee@gmail.com" className="form-control " value={email} onChange={(event) => setEmail(event.target.value)} required />
            </div>
            <div className="form-group mb-5">
              <label className="text-start pb-3">Password</label>
              <input type="password" placeholder="6+ karakter" className="form-control" value={password} onChange={(event) => setPassword(event.target.value)} required />
            </div>
            <button type="submit" className="btn btn-primary btn-signin">
              Sign In
            </button>
            <p className="textsign">
              Dont have account?{" "}
              <a href="/signup" className="anchor">
                Sign up hire
              </a>
            </p>
          </form>
        </Col>
        <Col>
          <div className="bgkosong">
            <div>
              <h1 className="textcar">Binar Car Rental</h1>
              <img src={Landing} alt="landing" className="landing end-0 bottom-0" />
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Signin;
