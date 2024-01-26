import React, { useEffect, useMemo, useState } from "react";
import UserList from "./components/user-list/UserList";
import Search from "../../components/search/Search";
import Sort from "../../components/sort/Sort";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => setUsers(json));
  }, []);

  const handleInput = (e) => {
    setInputValue(e.target.value);
  };


  const filteredUsers = useMemo(
    () =>
      users.filter((user) => {
        return user.username.toLowerCase().includes(inputValue.toLowerCase());
      }),
    [inputValue, users],
  );

  return (
    <>
      <Search inputValue={inputValue} handleInput={handleInput} />
      <Sort />
      <UserList users={filteredUsers} />
    </>
  );
};

export default Users;
