import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { updateProfile } from '../../../helpers/data/userData';

import {
  FormOuterDiv,
  FormHeading,
  XOut,
  ButtonDiv,
  CloseButton,
  SubmitButton,
  InputLabel,
  FormInput,
  FormBioInput
} from './ProfileFormElements';

const ProfileForm = ({
  user,
  setUser,
  closeModal
}) => {
  const [userProfile, setUserProfile] = useState({
    lastName: user.lastName || '',
    firstName: user.firstName || '',
    displayName: user.displayName || '',
    profilePicUrl: user.profilePicUrl || '',
    bio: user.bio || ''
  });

  const handleChange = (e) => {
    setUserProfile((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value ? e.target.value : ''
    }));
  };

  const handleSubmit = () => {
    if (user) {
      updateProfile(user.id, userProfile).then((updateResult) => {
        if (updateResult) {
          setUser(updateResult);
        }
      });
    }
  };

  return (
    <FormOuterDiv>
      <FormHeading>Edit Profile
        <XOut onClick={closeModal}>x</XOut>
      </FormHeading>
      <InputLabel htmlFor='firstName'>First Name</InputLabel>
        <FormInput
          type='text' name='firstName' value={userProfile.firstName}
          label='firstName' onChange={handleChange} />
      <InputLabel htmlFor='lastName'>Last Name</InputLabel>
        <FormInput
          type='text' name='lastName' value={userProfile.lastName}
          label='lastName' onChange={handleChange}/>
      <InputLabel htmlFor='displayName'>Display Name</InputLabel>
        <FormInput
          type='text' name='displayName' value={userProfile.displayName}
          label='displayName' onChange={handleChange}/>
      <InputLabel htmlFor='profilePicUrl'>Profile Image URL</InputLabel>
        <FormInput
          type='text' name='profilePicUrl' value={userProfile.profilePicUrl}
          label='profilePicUrl' onChange={handleChange}/>
      { user.roleTypeName !== 'Customer' && (<> <InputLabel htmlFor='bio'>Bio</InputLabel>
        <FormBioInput
          name='bio' value={userProfile.bio} rows='4' cols='50'
          label='bio' onChange={handleChange}/> </>) }
      <ButtonDiv>
        <CloseButton onClick={closeModal}>Cancel</CloseButton>
        <SubmitButton onClick={handleSubmit}>Submit</SubmitButton>
      </ButtonDiv>
    </FormOuterDiv>
  );
};

ProfileForm.propTypes = {
  user: PropTypes.any,
  setUser: PropTypes.func,
  closeModal: PropTypes.func
};

export default ProfileForm;
