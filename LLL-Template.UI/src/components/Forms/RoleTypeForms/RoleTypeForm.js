import React, { useState, useEffect } from 'react';
import {
  getRoleTypes,
  deleteRoleType,
  addRoleType,
  updateRoleType,
  getSingleRoleType
} from '../../../helpers/data/roleTypeData';

import {
  RoleTypeButtonLabel,
  RoleTypeFormDiv,
  RoleTypeRadioButton,
  RoleTypeButton,
  RoleTypeInputDiv,
  RoleTypeTextInput,
  RoleTypeMessage
} from './RoleTypeFormElements';

const RoleTypeForm = () => {
  const [roleList, setRoleTypes] = useState([]);
  const [selected, setSelected] = useState(null);
  const [showNew, setShowNew] = useState(false);
  const [showUpdate, setShowUpdate] = useState(false);
  const [roleTypesUpdated, setRoleTypesUpdated] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [message, setMessage] = useState('');
  const [roleTypeName, setRoleTypeName] = useState({
    roleTypeName: ''
  });

  useEffect(() => {
    getRoleTypes().then((responseArr) => {
      setRoleTypes(responseArr);
    });
  }, [roleTypesUpdated]);

  useEffect(() => {
    if (selected !== null) {
      getSingleRoleType(selected).then((responseObj) => {
        setRoleTypeName(responseObj);
      });
    }
  }, [selected]);

  useEffect(() => {
    function timedMessage() {
      setShowMessage(false);
    }
    setTimeout(timedMessage, 5000);
  }, [showMessage]);

  const handleSelectedChange = (e) => {
    setSelected(e.target.value);
  };

  const handleInputChange = (e) => {
    setRoleTypeName((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value ? e.target.value : ''
    }));
    console.warn(roleTypeName.roleTypeName);
  };

  const handleNewRoleSubmit = () => {
    addRoleType(roleTypeName)
      .then(() => {
        setShowMessage(true);
        setMessage(`Added roleType ${roleTypeName.roleTypeName}`);
      })
      .catch(() => setMessage(`RoleType ${roleTypeName} not added`));
    setRoleTypesUpdated(!roleTypesUpdated);
  };

  const handleUpdateRoleSubmit = () => {
    if (selected !== false) {
      setShowMessage(true);
      updateRoleType(selected, roleTypeName)
        .then(() => {
          setMessage(`Updated roleType ${roleTypeName.roleTypeName}`);
        })
        .catch(() => setMessage(`RoleType ${roleTypeName} not updated`));
      setRoleTypesUpdated(!roleTypesUpdated);
    }
  };

  const handleDelete = () => {
    if (selected !== null) {
      deleteRoleType(selected)
        .then(() => {
          setRoleTypesUpdated(!roleTypesUpdated);
          setMessage('Role Type deleted');
        })
        .catch(() => setMessage('RoleType was not deleted and may be in use.'));
      setShowMessage(true);
    }
  };

  const handleNew = () => {
    console.warn('Adding new');
    setShowNew(!showNew);
  };

  const handleUpdate = () => {
    setShowUpdate(!showUpdate);
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
      <RoleTypeButton onClick={handleUpdate}>Update</RoleTypeButton>
      { showUpdate ? <><RoleTypeTextInput
        onChange={handleInputChange}
        type='text'
        name='roleTypeName'
        value = {roleTypeName?.roleTypeName}
        />
        <RoleTypeButton
          onClick={handleUpdateRoleSubmit} >Submit Update</RoleTypeButton></> : <></> }
      <RoleTypeButton onClick={handleDelete}>Delete</RoleTypeButton>
      <RoleTypeButton onClick={handleNew}>Add New Role</RoleTypeButton>
      { showNew ? <><RoleTypeTextInput
        onChange={handleInputChange}
        type='text'
        name='roleTypeName'
        placeholder='Enter a RoleType name'
        />
        <RoleTypeButton
          onClick={handleNewRoleSubmit} >Submit Role</RoleTypeButton></> : <></> }
      <RoleTypeMessage>
        { showMessage ? message : ''}
      </RoleTypeMessage>
  </RoleTypeFormDiv>
  );
};

export default RoleTypeForm;
