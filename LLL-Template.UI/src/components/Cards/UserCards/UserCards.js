import PropTypes from 'prop-types';
import React from 'react';
import UserForm from '../../Forms/UserForms/UserForms';

import {
  Card,
  CardBio,
  CardImg,
  CardBody,
  UserCardButtons,
  EditButton,
  Modal,
  ButtonModal
} from './UserCardElements';

const UserCard = ({
  id,
  profilePicUrl,
  bio,
  firstName,
  lastName,
  roleTypeId,
}) => {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
  <>
      <Card key={id}>
        <CardImg src={profilePicUrl} />
        <CardBody>
          <CardBio>{bio}</CardBio>
        </CardBody>
        <UserCardButtons>
          <EditButton className="EditUser" onClick={openModal}>Edit User</EditButton>
        <Modal
              isOpen={modalIsOpen}
              className="Modal"
            >
              <ButtonModal className="modalClose" onClick={closeModal}>
              </ButtonModal>
              <UserForm
              id={id}
              firstName={firstName}
              lastName={lastName}
              roleTypeId={roleTypeId}
              profilePicUrl={profilePicUrl}
              bio={bio}
              />
            </Modal>
          </UserCardButtons>
      </Card>
  </>
  );
};

UserCard.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  roleTypeId: PropTypes.string,
  id: PropTypes.string,
  profilePicUrl: PropTypes.string,
  bio: PropTypes.string,
};

export default UserCard;
