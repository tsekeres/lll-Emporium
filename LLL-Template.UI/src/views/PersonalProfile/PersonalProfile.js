import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ProfileForm from '../../components/Forms/ProfileForms/ProfileForm';
import {
  ProfileOuterDiv,
  ProfileTitle,
  ProfilePicDiv,
  ProfileInnerDiv,
  ProfileImg,
  ProfileInfoDiv,
  ProfileInfoLineDiv,
  ProfileInfoLineHeading,
  ProfileInfoLineData,
  ProfileImageInfoLineDiv,
  ProfileEditButton,
  Modal,
  ModalContent
} from './PersonalProfileElements';

const PersonalProfile = ({
  user, setUser
}) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (

    <ProfileOuterDiv className='profile-outer-div'>
      <ProfileTitle className='profile-title'>
        Personal Profile
      </ProfileTitle>
      <ProfileInnerDiv className='profile-inner-div'>
        <ProfilePicDiv className='profile-pic'>
          <ProfileImg src={user.profilePicUrl} />
        </ProfilePicDiv>
        <ProfileInfoDiv className='info-div'>
          <ProfileInfoLineDiv>
            <ProfileInfoLineHeading>Name:</ProfileInfoLineHeading>
            <ProfileInfoLineData>{user?.firstName} {user?.lastName}</ProfileInfoLineData>
          </ProfileInfoLineDiv>
          <ProfileInfoLineDiv>
            <ProfileInfoLineHeading>Account Type:</ProfileInfoLineHeading>
            <ProfileInfoLineData>{user.roleTypeName}</ProfileInfoLineData>
          </ProfileInfoLineDiv>
          <ProfileInfoLineDiv>
            <ProfileInfoLineHeading>Display Name:</ProfileInfoLineHeading>
            <ProfileInfoLineData>{user.displayName}</ProfileInfoLineData>
          </ProfileInfoLineDiv>
          <ProfileInfoLineDiv>
            <ProfileInfoLineHeading>Email Address:</ProfileInfoLineHeading>
            <ProfileInfoLineData>{user.emailAddress}</ProfileInfoLineData>
          </ProfileInfoLineDiv>
          <ProfileInfoLineDiv>
            <ProfileInfoLineHeading>Profile Picture URL:</ProfileInfoLineHeading>
            <ProfileImageInfoLineDiv> {user.profilePicUrl}</ProfileImageInfoLineDiv>
          </ProfileInfoLineDiv>
          <ProfileEditButton onClick={openModal}>Edit</ProfileEditButton>
        </ProfileInfoDiv>
      </ProfileInnerDiv>
        <Modal className='modal'
            isOpen={modalIsOpen} >
            <ModalContent className='modal-content'>
              <ProfileForm className='profile-form'
              user={user} setUser={setUser}
              closeModal={closeModal} />
            </ModalContent>
        </Modal>
    </ProfileOuterDiv>
  );
};

PersonalProfile.propTypes = {
  user: PropTypes.any,
  setUser: PropTypes.func
};

export default PersonalProfile;
