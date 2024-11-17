import React from "react";
import "./rightbar.css";
import { Users } from "../../dummyData";
import Online from "../online/Online";

export default function Rightbar({ profile }) {
  const HomeRightbar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img className="birthdayImg" src="assets/gift.png" alt="" />
          <span className="birthdayText">
            <b>Pola foster</b> and <b>3 others</b> have a birthday today.
          </span>
        </div>
        <img className="rignhtbarAd" src="assets/ad.png" alt="" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarfriendList">
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </>
    );
  };

  const ProfileRightbar = () => {
    return (
      <>
        <h4 className="rightbarTitle">User information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">karachi</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From:</span>
            <span className="rightbarInfoValue">pakistan</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship:</span>
            <span className="rightbarInfoValue">Single</span>
          </div>
        </div>


        <h4 className="rightbarTitle">User friends</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img
              src="https://i.postimg.cc/BZdpZRnn/IMG-20231130-WA0123.jpg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingname">Waqas Rafiq</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="https://i.postimg.cc/DzB9xYS1/IMG-20240410-WA0017.jpg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingname">Bilal Rafiq</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="https://i.postimg.cc/BnvkXBY6/IMG-20240913-WA0002.jpg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingname">Anas</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="https://i.postimg.cc/4dvB8YLq/IMG-20240725-WA0011.jpg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingname">Owais Rafiq</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="https://i.postimg.cc/rpk4fQBy/IMG-20231115-WA0074.jpg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingname">Hamza</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/persons/6.jpg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingname">Johnathan Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="https://i.postimg.cc/Vs31FsDB/Screenshot-20240607-174356.jpg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingname">syeda Kinza</span>
          </div>
        </div>
      </>
    );
  };
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {profile ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  );
}
