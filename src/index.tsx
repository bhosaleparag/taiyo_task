import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import {
  RouterProvider,
  Route,
  createRoutesFromElements,
  createBrowserRouter,
} from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import CreateContact from "./components/CreateContact";
import NewContact from "./components/NewContact";
import NotFound from "./components/NotFound";
import Map from "./components/chartMap/Map";
import LineGraph from "./components/chartMap/LineGraph";

// route that store all routes
const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route index element={<Home/>}/>
    <Route path="createContact" element={<CreateContact/>}/>
    <Route path="NewContact" element={<NewContact/>}/>
    <Route path="map" element={<Map/>}/>
    <Route path="graph" element={<LineGraph/>}/>
    <Route path="*" element={<NotFound />} />
  </Route>

  )
);

function App() {
  return <RouterProvider router={router} />;
}

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
