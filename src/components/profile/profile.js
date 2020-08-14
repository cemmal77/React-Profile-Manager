import React, { useState } from "react";
import "./profile.scss";
import profilePic from "../../assets/images/profile.jpg";

const Profile = () => {
  const [profile, setProfile] = useState({
    profilePicUrl: "",
    firstName: "John",
    lastName: "Smith",
    jobTitle: "Project Manager",
    email: "john.smith@yahoo.com",
    homeAddress: {
      address1: "1776 Main St",
      address2: null,
      city: "Smalltown",
      state: "AL",
      zip: 55555,
    },
  });

  return (
    <div className="profile">
      <img
        src={profilePic}
        alt="Profile Picture"
        className="profile-picture"
      ></img>

      <div className="profile-desc">
        <p className="txt-xl txt-sec">
          {profile.firstName} {profile.lastName}
        </p>
        <p className="txt-lg txt-inf">{profile.jobTitle}</p>
        <p className="txt-sm">{profile.email}</p>
        <div className="txt-sm">
          <p>{profile.homeAddress.address1}</p>
          <p>{profile.homeAddress.address2}</p>
          <p>
            {profile.homeAddress.city}, {profile.homeAddress.state}{" "}
            {profile.homeAddress.zip}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
