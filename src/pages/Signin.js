import React, { useContext, useState } from "react";
import {
  Container,
  Form,
  Button,
  FormGroup,
  Row,
  Col,
  Input,
  Label,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
} from "reactstrap";
import { toast } from "react-toastify";
import { UserContext } from "../context/UserContext";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Navigate } from "react-router-dom";

const Signin = () => {
  const auth = getAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user, setUser } = useContext(UserContext);

  const handleSignIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setUser({
          email: userCredential.user.email,
          uid: userCredential.user.uid,
        });
        toast("Successfully Signed In", { type: "success" });
      })
      .catch((error) => {
        toast(error.message, { type: "error" });
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSignIn();
  };

  if (user?.uid) {
    return <Navigate to="/" />;
  }
  return (
    <Container className="text-center">
      <Row>
        <Col lg={6} className="offset-lg-3 mt-5">
          <Card>
            <Form onSubmit={handleSubmit}>
              <CardHeader className="">Signin here</CardHeader>
              <CardBody>
                <FormGroup row>
                  <Label for="email" sm={3}>
                    Email
                  </Label>
                  <Col sm={9}>
                    <Input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="provide your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="password" sm={3}>
                    Password
                  </Label>
                  <Col sm={9}>
                    <Input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="your password here"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </Col>
                </FormGroup>
              </CardBody>
              <CardFooter>
                <Button type="submit" block color="primary">
                  Sign In
                </Button>
              </CardFooter>
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Signin;
