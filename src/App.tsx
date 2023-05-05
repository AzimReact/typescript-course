import UsersPage from "./components/UsersPage";
import TodosPage from "./components/TodosPage";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import UserItemPage from "./components/UserItemPage";

function App() {
    return (
        <BrowserRouter>
            <div>
                <NavLink to="/users">Пользователи</NavLink>
                <NavLink to="/todos">Список дел</NavLink>
            </div>
            <Routes>
                <Route path="/users" element={<UsersPage />} />
                <Route path="/todos" element={<TodosPage />} />
                <Route path="/users/:id" element={<UserItemPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
