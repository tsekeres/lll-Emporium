import React from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  CardImg,
  CardBody,
  CardBio
} from './DesignerCardElements';

const DesignerCard = ({ RoleTypeId, profilePicUrl, bio }) => (
    <Card key={RoleTypeId}>
    <CardImg src={profilePicUrl} />
    <CardBody>
      <CardBio>{bio}</CardBio>
    </CardBody>
  </Card>
);
DesignerCard.propTypes = {
  RoleTypeId: PropTypes.string,
  profilePicUrl: PropTypes.string,
  bio: PropTypes.string
};
export default DesignerCard;
