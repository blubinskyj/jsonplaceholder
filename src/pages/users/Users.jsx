import React, { useEffect, useState } from "react";
import UserList from "./components/user-list/UserList";
import Search from "../../components/search/Search";
import Sort from "../../components/sort/Sort";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [sortedUsers, setSortedUser] = useState(users);
  const [inputValue, setInputValue] = useState("");
  const [sort, setSort] = useState('');

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => setUsers(json));
  }, []);


  useEffect(() => {
    const filterAndSortUsers = () => {
      let filteredUsers = [...users];

      filteredUsers = filteredUsers.filter(user =>
          user.username.toLowerCase().includes(inputValue.toLowerCase())
      );

      if (sort === 'asc') {
        filteredUsers.sort((a, b) => (a.username > b.username ? 1 : -1));
      } else {
        filteredUsers.sort((a, b) => (a.username < b.username ? 1 : -1));
      }

      setSortedUser(filteredUsers);
    };

    filterAndSortUsers();
  }, [inputValue, sort, users]);

  return (
    <>
      <Search inputValue={inputValue} handleInput={(e)=> setInputValue(e.target.value)} />
      <Sort sortAsc={()=> setSort('asc')} sortDesc={()=> setSort('desc')} />
      <UserList users={sortedUsers} />
    </>
  );
};

export default Users;
