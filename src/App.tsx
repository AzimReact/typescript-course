import React from 'react';
import Card, {CardVariant} from "./components/Card";
import {IUser} from "./types/types";
import UserList from "./components/UserList";

function App() {
    const users: IUser[] = [
        {id: 1, name: 'Azim', email: 'azimreact@gmail.com', address: {city: 'Bishkek', street: 'Sovetskaya', zipcode: '720020'}},
        {id: 2, name: 'Akim', email: 'akimreact@gmail.com', address: {city: 'Bishkek', street: 'Sovetskaya', zipcode: '720020'}},
    ]
  return (
    <div className="App">
        <Card onclick={(num) => console.log('void', num)} variant={CardVariant.primery} width={'200px'} height={'200px'} >
            <button>click</button>
            <div>qwerty</div>
        </Card>
        <UserList users={users} />
    </div>
  );
}

export default App;
