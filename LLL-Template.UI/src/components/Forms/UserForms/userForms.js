import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { updateUser, getUsers } from '../../../helpers/data/userData';

const userForm = () => {
  const [users, setUsers] = useState({
    FirstName: FirstName || " ",
    LastName: LastName || " ",
    RoleTypeId: RoleTypeId || " ",
    Bio: Bio || " ",
  });

  const [updateUsers, updateUserShown] = useState([]);
  // Show the updated user on screen
  const [userUpdated, setUserUpdate] = useState([]);
  // populate the update on the user so we can see it
  const [deleteUser, RemoveFromList] = useState([]);
  // remove user from database and site, only show delete if user is an admin 

  const handleUpdate = (e) => {
    e.preventDefault;
    if (users.id === updateUsers.id) {
      const userObj = {
        FirstName: FirstName || '',
        LastName: LastName || '',
        roleTypeId: roleTypeId || '',
        Bio: Bio || '',
      }
      setShowMessage(true);
     updateUser(id).then(() =>  getUsers().then((response) => setUsers(response)))
        .then(() => {
          setMessage(`Updated user ${FirstName} ${LastName}`);
          setUserUpdate(userUpdated);
        })
        .catch((err) => set(err));
    }
  };

  const handleDelete = () => {
    let canIDelete = false;
    if (users.roleTypeName === 'Administrator') {
    canIDelete = true;
    deleteUser(id, userObj).then(() => getUsers().then((response) => RemoveFromList(response)))
    };
    return (
      <div>
         'user{users.id} Has been removed.'
      </div>
    )
  }

 return (
   <UserUpdateForm>
       <Label className='First Name'>:First Name </Label>
    <Input
     className='First Name'
     name='name'
     Placeholder='Enter updated First Name Here'
     value={updateUser.FirstName}
     onChange={handleUpdate}     
    ></Input>
    <Label ClassName='Last Name'>: Last Name</Label>
    <Input
    className='Last Name'
    name='last name'
    placeholder='Enter updated last name'
    value={updateUser.LastName}
    onChange={handleUpdate}
    ></Input>
    <Label className='Bio'>:Bio</Label>
    <Input
    className='Bio'
    name='Bio'
    placeholder='Enter updated bio'
    value={updatedUser.Bio}
    onChange={handleUpdate}
    ></Input>
    <Label className='Image'>:Image</Label>
    <Input
    className='Image'
    src={updateUser.ProfilePicURL}
    placeholder='enter photo url'
    onChange={handleUpdate}
    ></Input>
    <Label className='Role Type Map'>:Role Type</Label>
    {RoleTypes?.map((RoleType) => (
      <option
      key={RoleType.id}
      value={RoleType.name}
      selected={RoleType.id === RoleType}
      ></option>
    ))}
   </UserUpdateForm>
 )

};

userForm.propTypes = {
  FirstName: PropTypes.string.isRequired,
  LastName: PropTypes.string,
  RoleTypeId: PropTypes.string,
  ProfilePicURL: PropTypes.string,
};

 export default { userForm };
