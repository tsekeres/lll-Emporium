/* import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
 import { updateUser, addUsers, getUsers } from '../../../helpers/data/userData';

const userForm = () => {
  const [users, setUsers] = useState({
    FirstName: FirstName || " ",
    LastName: LastName || " ",
    RoleTypeId: RoleTypeId || " ",
    Bio: Bio || " ",
  });

  const [updateUser, updateUserShown] = useState(false);
  // Show the updated user on screen
  const [userUpdated, setUserUpdate] = useState(false);
  // populate the update on the user so we can see it

  const handleUpdate = () => {
    if (selected !== false) {
      setShowMessage(true);
      updateUser(selected, userName)
        .then(() => {
          setMessage(`Updated user ${FirstName} ${LastName}`);
          setUserUpdated(!userUpdated);
        })
        .catch((err) => set(err));
    }
  };

  userForm.propTypes = {
    FirstName: PropTypes.string.isRequired,
    LastName: PropTypes.string,
    RoleTypeId: PropTypes.string,
    ProfilePicURL: PropTypes.string,
  };

  return <Form id='updateUserForm' onSubmit={handleUpdate} />;
};

export { userForm };
*/
