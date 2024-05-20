import React from 'react';
import './styles/Profile.css';

function Profile() {
  const info = {
    name: 'Phan Thanh Tú',
    dob: '18/06/2002',
    address: 'Dong Da, Ha Noi',
    pNum: '0396271760',
    school: 'Posts and Telecommunications Institute of Technology',
    major: 'Multimedia Technology',
  };

  const getImgSrc = (name) => {
    return `/imgs/sIcons/${name}.png`;
  };

  return (
    <div className="pContainer">
      <div className="imgContainer">
        <img src="/imgs/profile/pImg.jpg" alt="" />
      </div>
      <div className="infoContainer">
        <span>
          <span className="infoTitle">Full name:&nbsp;</span> {info.name}
        </span>
        <span>
          <span className="infoTitle">Date of birth:&nbsp;</span> {info.dob}
        </span>
        <span>
          <span className="infoTitle">Address:&nbsp;</span> {info.address}
        </span>
        <span>
          <span className="infoTitle">Phone number:&nbsp;</span> {info.pNum}
        </span>
        <span>
          <span className="infoTitle">University:&nbsp;</span> {info.school}
        </span>
        <span>
          <span className="infoTitle">Major:&nbsp;</span> {info.major}
        </span>
      </div>
    </div>
  );
}

export default Profile;
