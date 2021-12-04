import React, { useEffect, useState } from 'react';
import UserCard from '../../components/Cards/UserCards/UserCards';
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
        <UserCard key={userObj.id} id={userObj.id} firstName={userObj.firstName} lastName={userObj.lastName} bio={userObj.bio} profilePicUrl={userObj.profilePicUrl} />
      ))}
    </>
  );
};

export default userCardView;
