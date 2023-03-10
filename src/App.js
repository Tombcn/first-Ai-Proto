import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import Project from "./pages/project/Project";
import Create from "./pages/create/Create";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { useAuthContext } from "./hooks/useAuthContext";
import "./App.css";
import OnlineUsers from "./components/OnlineUsers";

function App() {
  const { authIsReady, user } = useAuthContext();

  return (
    <div className="App">
      {authIsReady && (
        <Router>
          {user && <Sidebar />}
          <div className="container">
            <Navbar />
            <Routes>
              <Route
                path="/"
                element={user ? <Dashboard /> : <Navigate to="/login" />}
              />
              <Route
                path="/create"
                element={user ? <Create /> : <Navigate to="/login" />}
              />
              <Route
                path="/projects/:id"
                element={user ? <Project /> : <Navigate to="/login" />}
              />

              <Route
                path="/login"
                element={user ? <Navigate to="/" /> : <Login />}
              />

              <Route
                path="/signup"
                element={user ? <Navigate to="/" /> : <Signup />}
              />
            </Routes>
          </div>{" "}
          {user && <OnlineUsers />}
        </Router>
      )}
    </div>
  );
}

export default App;
