import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { deleteRoleType } from '../../helpers/data/roleTypeData';

import {
  RoleTypeButtonLabel,
  RoleTypeFormDiv,
  RoleTypeRadioButton,
  RoleTypeButton,
  RoleTypeInputDiv,
  RoleTypeTextInput
} from './RoleTypeFormElements';

const RoleTypeForm = ({
  roleList
}) => {
  const [selected, setSelected] = useState();
  const [showNew, setShowNew] = useState(false);
  const [roleTypeName, setRoleTypeName] = useState({
    roleTypeName: ''
  });

  const handleSelectedChange = (e) => {
    setSelected(e.target.value);
  };

  const handleInputChange = (e) => {
    setRoleTypeName((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
    console.warn(roleTypeName);
  };

  const handleDelete = () => {
    if (selected != null) {
      deleteRoleType(selected)
        .then(() => console.warn('Roletype was deleted'))
        .catch(() => console.warn('RoleType was not deleted'));
    }
  };

  const handleNew = () => {
    console.warn('Adding new');
    setShowNew(!showNew);
  };

  return (
  <RoleTypeFormDiv>
      { roleList.map((role) => <RoleTypeInputDiv key={role.id}><RoleTypeRadioButton
          type='radio'
          name='role-list'
          value={role.id}
          onChange={(event) => handleSelectedChange(event)} />
          <RoleTypeButtonLabel>{role.roleTypeName}</RoleTypeButtonLabel>
      </RoleTypeInputDiv>)}
      <RoleTypeButton onClick={handleDelete}>Delete</RoleTypeButton>
      <RoleTypeButton onClick={handleNew}>Add New Role</RoleTypeButton>
      { showNew ? <><RoleTypeTextInput
        onClick={handleInputChange}
        type='text'
        name='roleTypeName'
        placeholder='Enter a RoleType name'
        />
        <RoleTypeButton>Submit Role</RoleTypeButton></> : <></> }
  </RoleTypeFormDiv>
  );
};

RoleTypeForm.propTypes = {
  roleList: PropTypes.array
};

export default RoleTypeForm;
