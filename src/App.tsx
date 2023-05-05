// import React from 'react';
import { useEffect, useState } from "react";
import Card, { CardVariant } from "./components/Card";
import { ITodo, IUser } from "./types/types";
import axios from "axios";
import List from "./components/List";
import UserItem from "./components/UserItem";
import TodoItem from "./components/TodoItem";
import EventsExample from "./components/EventsExample";

function App() {
    const [users, setUsers] = useState<IUser[]>([]);
    const [todos, setTodos] = useState<ITodo[]>([]);

    useEffect(() => {
        fetchUsers();
        fetchTodos();
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

    async function fetchTodos() {
        try {
            const response = await axios.get<ITodo[]>(
                "https://jsonplaceholder.typicode.com/todos?_limit=10"
            );
            setTodos(response.data);
        } catch (e) {
            alert(e);
        }
    }
    return (
        <div className="App">
            <EventsExample />
            <Card
                onclick={(num) => console.log("void", num)}
                variant={CardVariant.primery}
                width={"200px"}
                height={"200px"}
            >
                <button>click</button>
                <div>qwerty</div>
            </Card>
            <List
                items={users}
                renderItem={(user: IUser) => (
                    <UserItem user={user} key={user.id} />
                )}
            />
            <List
                items={todos}
                renderItem={(todo: ITodo) => (
                    <TodoItem todo={todo} key={todo.id} />
                )}
            />
        </div>
    );
}

export default App;
