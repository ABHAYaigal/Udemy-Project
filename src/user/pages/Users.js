import React from 'react';

import UsersList from '../components/UsersList';

const Users = () => {
  const USERS = [
    {
      id: 'u1',
      name: 'Abhay Aigal',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1FtInZKq3CQqJhoD0xXd3smQ7Adu-TEMnXJDWJO0WfBCWhKqYJc5apHGmaQY4nfcmylM&usqp=CAU',
      places: 3
    }
  ];

  return <UsersList items={USERS} />;
};

export default Users;
