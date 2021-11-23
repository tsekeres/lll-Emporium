import React, { useEffect, useState } from 'react';
import UserCard from '../../components/Cards/UserCards/UserCards';
import { userForm } from '../../components/Forms/UserForms/userForms';
import { getUsers } from '../../helpers/data/userData';

const userCardView = () => {
  const [userGroup, setUserGroup] = useState([]);

  useEffect(() => {
    getUsers().then((userList) => {
      setUserGroup(userList);
    });
  }, []);

  return (
    <>
      {userGroup.map((userObj) => (
        <UserCard key={userObj.id} userForm={<userForm />} bio={userObj.bio} profilePicUrl={userObj.profilePicUrl} />
      ))}
    </>
  );
};

export default userCardView;
