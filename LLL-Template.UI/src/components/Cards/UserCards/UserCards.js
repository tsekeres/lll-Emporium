import PropTypes from 'prop-types';
import React from 'react';

import {
  Card,
  CardBio,
  CardImg,
  CardBody
} from './UserCardElements';

const UserCard = ({ id, profilePicUrl, bio }) => (
  <>
      <Card key={id}>
        <CardImg src={profilePicUrl} />
        <CardBody>
          <CardBio>{bio}</CardBio>
        </CardBody>
      </Card>
  </>
);

UserCard.propTypes = {
  id: PropTypes.string,
  profilePicUrl: PropTypes.string,
  bio: PropTypes.string
};

export default UserCard;
