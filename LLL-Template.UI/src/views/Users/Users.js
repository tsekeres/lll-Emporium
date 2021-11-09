import React, { useEffect, useState } from 'react';
import UserCard from '../../components/Cards/UserCards/UserCards';
import { getAllUsers } from '../../helpers/data/userData';
import { userForm } from '../../components/Forms/UserForms/UserForms';

const userCardView = () => {
  const [userGroup, setUserGroup] = useState([]);

  useEffect(() => {
    getAllUsers().then((userList) => {
      setUserGroup(userList);
    });
  }, []);

  return (
    <>
      {userGroup.map((userObj) => (
        <UserCard key={userObj.id} userForm={userForm} bio={userObj.bio} profilePicUrl={userObj.profilePicUrl} />
      ))}
    </>
  );
};

export default userCardView;
