import UsersPage from "./components/UsersPage";
import TodosPage from "./components/TodosPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/users" element={<UsersPage />} />
                <Route path="/todos" element={<TodosPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
