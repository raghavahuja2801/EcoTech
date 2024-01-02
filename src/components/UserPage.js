import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import firebase from 'firebase/compat/app';
import 'firebase/auth';
import 'firebase/storage';
import Navbar from './Navbar';
import Footer from './Footer';

// Styled components
const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
`;

const Title = styled.h1`
  color: #333;
`;

const ProfileImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 3px solid #0077b6;
  margin-bottom: 1rem;
`;

const UploadButton = styled.button`
  background-color: #0077b6;
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 1rem;
  &:hover {
    background-color: #005f8a;
  }
`;

const UserName = styled.h2`
  color: #333;
  margin: 0.5rem 0;
`;

const MemberSince = styled.p`
  color: #666;
  font-style: italic;
`;

// UserProfile component
const UserProfile = () => {
  const [user, setUser] = useState(null);
  const [imageUpload, setImageUpload] = useState(null);
  const [memberSince, setMemberSince] = useState('');

  useEffect(() => {
    firebase.auth().onAuthStateChanged((currentUser) => {
      setUser(currentUser);
      if (currentUser?.metadata.creationTime) {
        setMemberSince(currentUser.metadata.creationTime);
      }
    });
  }, []);

  const uploadImage = () => {
    if (imageUpload == null || !user) return;
    const imageRef = firebase.storage().ref(`users/${user.uid}/profile.jpg`);
    imageRef.put(imageUpload).then(() => {
      console.log('Uploaded a blob or file!');
      // Here you could instead update the user's photoURL and only reload the image
      window.location.reload();
    });
  };

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setImageUpload(e.target.files[0]);
    }
  };

  if (!user) {
    return <ProfileContainer>Loading...</ProfileContainer>;
  }

  return (
    <div>
    <Navbar />
    <ProfileContainer>
      <Title>User Profile</Title>
      <ProfileImage 
        src={user.photoURL || 'path_to_some_default_image.png'} 
        alt="Profile" 
      />
      <div>
        <input type="file" onChange={handleImageChange} />
        <UploadButton onClick={uploadImage}>Upload Image</UploadButton>
      </div>
      <UserName>{user.displayName}</UserName>
      <MemberSince>Member since: {new Date(memberSince).toLocaleDateString()}</MemberSince>
    </ProfileContainer>
    <Footer />
    </div>
  );
};

export default UserProfile;
