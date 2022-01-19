import React from "react";
import { Card, CardBody } from "reactstrap";

const UserCard = ({ user }) => {
  return (
    <Card className="text-center mt-3 mb-5">
      <img
        src={user.avatar_url}
        className="img-thumbnail"
        height="50px"
        width="100%"
        alt="profile"
      />
      <CardBody>
        <div className="text-primary">Name: {user.name}</div>
        <div className="text-primary">Location: {user.location}</div>
        <div className="text-primary">Bio: {user.bio}</div>{" "}
        <div className="text-info">
          Available for hire: {user.hireable ? "Yes" : "No"}
        </div>
        <div className="text-info">Followers: {user.followers}</div>
      </CardBody>
    </Card>
  );
};

export default UserCard;
