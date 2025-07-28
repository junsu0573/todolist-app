import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import SuccessRegister from "./pages/SuccessRegister";
import PrivateRoute from "./pages/PrivateRoute";
import { loginAuth } from "./utils/api/auth";

function App() {
  const [user, setUser] = useState(null);

  const getUser = async () => {
    const token = sessionStorage.getItem("token");
    if (token) {
      const res = await loginAuth();
      setUser(res);
    } else console.log("No token found");
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <PrivateRoute user={user}>
                <Home user={user} />
              </PrivateRoute>
            }
          />
          <Route
            path="/login"
            element={<Login user={user} setUser={setUser} />}
          />
          <Route path="/register" element={<Register />} />
          <Route path="/success-register" element={<SuccessRegister />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
