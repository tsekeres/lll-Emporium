import React from 'react';
import RoleTypeForm from '../../components/Forms/RoleTypeForms/RoleTypeForm';
import { RoleView, RoleViewTitle } from './RoleTypeElements';

const RoleTypeView = () => (
  <RoleView>
    <RoleViewTitle>Manage RoleTypes</RoleViewTitle>
    <RoleTypeForm />
  </RoleView>
);

export default RoleTypeView;
