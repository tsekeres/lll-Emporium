import React, { useState, useEffect } from 'react';
import Popup from 'reactjs-popup';
import PropTypes from 'prop-types';
import { updateUser, getUsers } from '../../../helpers/data/userData';
import { getRoleTypes } from '../../../helpers/data/roleTypeData';

import {
  Label,
  Input,
  UserUpdateForm,
  UserUpdateSubmit,
  Option,
  Select
} from './UserFormElements';

const UserForm = ({
  id,
  firstName,
  lastName,
  roleTypeId,
  profilePicUrl,
  bio,
}) => {
  const [user, setUser] = useState({
    id: id || '',
    firstName: firstName || ' ',
    lastName: lastName || ' ',
    roleTypeId: roleTypeId || ' ',
    profilePicUrl: profilePicUrl || ' ',
    bio: bio || ' ',
  });

  const [roles, setRoles] = useState([]);

  const handleInputChange = (e) => {
    setUser((prevState) => ({
    // taking all values from changes and resetting
      ...prevState,
      [e.target.name]: e.target.value ? e.target.value : ''
    }));
  };

  const handleSubmit = () => {
    if (user.id) {
      updateUser(id, user).then(() => getUsers().then((response) => setUser(response)))
        .then(() => {
          <Popup trigger={handleSubmit} position="right center">
          <div>{firstName} {lastName} has been updated</div>
        </Popup>;
        });
    }
  };

  useEffect(() => {
    getRoleTypes().then((response) => setRoles(response));
  }, []);

  /* const handleDelete = () => {
    let canIDelete = false;
    if (admin.roleTypeName === "Administrator") {
    canIDelete = true;
    deleteUser(id).then(() => getUsers().then((response) => (response)))
    };
    return (
      <Popup trigger={handleDelete} position="right center">
      <div>{user.id} has been removed</div>
    </Popup>
    )
  }
*/
  return (
   <UserUpdateForm
   >
       <Label className="First Name">First Name </Label>
    <Input
     className="firstName"
     id="firstName"
     name="firstName"
     type="text"
     Placeholder="Enter updated First Name"
     value={user.firstName}
     onChange={handleInputChange}
    ></Input>
    <Label ClassName="Last Name">Last Name</Label>
    <Input
    className="lastName"
    name="lastName"
    type="text"
    placeholder="Enter updated last name"
    value={user.lastName}
    onChange={handleInputChange}
    ></Input>
    <Label className="Bio">Bio</Label>
    <Input
    className="Bio"
    name="bio"
    placeholder="Enter updated bio"
    value={user.bio}
    onChange={handleInputChange}
    ></Input>
    <Label className="Image">Image</Label>
    <Input
    className="profilePicUrl"
    name="profilePicUrl"
    type="text"
    value={user.profilePicUrl}
    placeholder="enter photo url"
    onChange={handleInputChange}
    ></Input>
    <Label className="Roletypes">Roletypes</Label>
    <Select
    id="exampleSelect"
    name="roleTypeId"
    className="roleType"
    placeholder="Chose a role type"
    type="select"
    onChange={handleInputChange}
    >
    {roles?.map((RoleType) => (
      <Option
      key={RoleType.id}
      value={RoleType.id}
      selected={RoleType.id === roleTypeId}
      >
        {RoleType.roleTypeName}
      </Option>
    ))}
   </Select>
    <UserUpdateSubmit
    type="submit"
    label="Submit"
    onClick={handleSubmit}
    >Submit</UserUpdateSubmit>
   </UserUpdateForm>
  );
};

UserForm.propTypes = {
  id: PropTypes.string.isRequired,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  roleTypeId: PropTypes.string,
  profilePicUrl: PropTypes.string,
  bio: PropTypes.string,
};

export default UserForm;
