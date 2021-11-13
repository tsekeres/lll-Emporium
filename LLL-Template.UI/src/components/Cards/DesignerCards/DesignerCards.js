import React from 'react';
import PropTypes from 'prop-types';

const DesignerCard = ({ RoleTypeId, profilePicUrl, bio }) => (
    <Card key={RoleTypeId}>
    <CardImg src={profilePicUrl} />
    <CardBody>
      <CardBio>{bio}</CardBio>
    </CardBody>
  </Card>
);
DesingerCard.propTypes = {
    RoleTypeId: PropTypes.string,
    profilePicUrl: PropTypes.string,
    bio: PropTypes.string
  };
export default DesignerCard;
