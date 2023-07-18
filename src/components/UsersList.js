import React from 'react'
import { useFetchUsersQuery } from '../store';
import { Skeleton } from '@mui/material';
import UserListItem from './UserListItem';

function UsersList() {
  const { data, isError, isFetching } = useFetchUsersQuery();
  let content;
  if (isFetching) {
    content = (
      <Skeleton variant='rectangular' sx={{ width: '100%', height: '600px;' }} />
    )
  }
  else if (isError) {
    content = <div> Hata var</div>
  }
  else {
    content = data.map((user) => {
      return <UserListItem key={user.id} user={user} />
    })
  }
  return (
    < div > {content}</div >
  )

}

export default UsersList;