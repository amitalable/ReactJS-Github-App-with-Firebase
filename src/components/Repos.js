import React, { useEffect, useState } from "react";
import Axios from "axios";
import { ListGroup, ListGroupItem } from "reactstrap";

const Repos = ({ repos_url }) => {
  const [repos, setRepos] = useState([]);

  const fetchRepos = async () => {
    const { data } = await Axios.get(repos_url);
    setRepos(data);
  };

  useEffect(() => {
    fetchRepos();
  }, [repos_url]);

  return (
    <ListGroup>
      {repos.map((item) => (
        <ListGroupItem key={repos.id}>
          <div className="text-primary">{item.name}</div>
          <div className="text-secondary">{item.language}</div>
          <div className="text-info">{item.description}</div>
        </ListGroupItem>
      ))}
    </ListGroup>
  );
};

export default Repos;
