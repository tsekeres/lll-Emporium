import React, { useState, useEffect } from 'react';
import RoleTypeForm from '../../components/Forms/RoleTypeForms/RoleTypeForm';
import { getRoleTypes } from '../../helpers/data/roleTypeData';
import { RoleView, RoleViewTitle } from './RoleTypeElements';

const RoleTypeView = () => {
  const [roleTypes, setRoleTypes] = useState([]);

  useEffect(() => {
    getRoleTypes().then((responseArr) => {
      setRoleTypes(responseArr);
    });
  }, []);

  return (
    <RoleView>
      <RoleViewTitle>Manage RoleTypes</RoleViewTitle>
      <RoleTypeForm roleList={roleTypes} />
    </RoleView>
  );
};

export default RoleTypeView;
