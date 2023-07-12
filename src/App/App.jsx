import Navbar from "../Components/Navbar/Navbar";
import Home from "../Pages/Home";
import Logout from "../Pages/Users/logout";
import Footer from "../Components/Footer/Footer";
import Login from "../Pages/Users/login";
import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Signup from "../Pages/Users/signup";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Route>
    )
  );
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

const Root = () => {
  return (
    <>
      <Navbar/>
      <div>
        <Outlet />
      </div>
      <Footer/>
    </>
  );
};