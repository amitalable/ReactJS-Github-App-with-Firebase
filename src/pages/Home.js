import React, { useState, useContext } from "react";
import Axios from "axios";

import { Row, Container, Col, Input, Button, InputGroup } from "reactstrap";

import UserCard from "../components/UserCard";
import Repos from "../components/Repos";
import { UserContext } from "../context/UserContext";
import { toast } from "react-toastify";
import { Navigate } from "react-router-dom";

const Home = () => {
  const { user } = useContext(UserContext);
  const [query, setQuery] = useState("");
  const [users, setUsers] = useState(null);

  const fetchDetails = async () => {
    try {
      const { data } = await Axios.get(`https://api.github.com/users/${query}`);
      setUsers(data);
    } catch (error) {
      toast("Not able to locate User", { type: "error" });
    }
  };

  if (!user?.uid) {
    return <Navigate to="/signin" />;
  }

  return (
    <Container>
      <Row className=" mt-3">
        <Col md="5">
          <InputGroup>
            <Input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Please provide the username"
            />

            <Button color="primary" onClick={fetchDetails}>
              Fetch User
            </Button>
          </InputGroup>
          {users && <UserCard user={users} />}
        </Col>
        <Col md="7">{users && <Repos repos_url={users.repos_url} />}</Col>
      </Row>
    </Container>
  );
};

export default Home;
