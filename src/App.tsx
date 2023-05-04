// import React from 'react';
import { useEffect, useState } from "react";
import Card, { CardVariant } from "./components/Card";
import UserList from "./components/UserList";
import { IUser } from "./types/types";
import axios from "axios";

function App() {
  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  async function fetchUsers() {
    try {
      const response = await axios.get<IUser[]>(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUsers(response.data);
    } catch (e) {
      alert(e);
    }
  }
  return (
    <div className="App">
      <Card
        onclick={(num) => console.log("void", num)}
        variant={CardVariant.primery}
        width={"200px"}
        height={"200px"}
      >
        <button>click</button>
        <div>qwerty</div>
      </Card>
      <UserList users={users} />
    </div>
  );
}

export default App;
