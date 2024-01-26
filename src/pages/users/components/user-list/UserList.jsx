import UserCard from "../user-card/UserCard";

const UserList =({ users }) => {
  return (
    <ul>
      {users.map((user) => (
        <UserCard user={user} key={user.id} />
      ))}
    </ul>
  );
};

export default UserList;
