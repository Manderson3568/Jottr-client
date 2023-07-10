import Navbar from "../Components/Navbar/Navbar";
import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Outlet,
  RouterProvider,
} from "react-router-dom";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        {/* <Route index element={<Home />} /> */}
        {/* <Route path="/youtube" element={<Youtube />} />
        <Route path="/pokemon" element={<Pokemon />} />
        <Route path="/timer" element={<TimerExample />} />
        <Route path="/youtube-timer" element={<YoutubeTimer />} />
        <Route path="/stopwatch" element={<Stopwatch />} />
        <Route
          path="/youtube-typing-controls"
          element={<YoutubeTypingControls />}
        /> */}
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
    </>
  );
};