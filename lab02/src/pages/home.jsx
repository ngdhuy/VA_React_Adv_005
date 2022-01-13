import React from "react";
import {
  Routes,
  Route,
  Outlet,
  Link
} from "react-router-dom";

const Info = React.lazy(() => import("./about/info"));
const Contact = React.lazy(() => import("./about/contact"));

export function Home(props) {
  return(
    <div>
      <h1>Welcome to Home page</h1>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam, expedita minus. Ducimus, hic dolorum harum suscipit alias optio deleniti incidunt quisquam, perspiciatis eaque sunt molestias culpa, praesentium laudantium earum ipsa.</p>

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="info" element={
            <React.Suspense fallback={<>...</>}>
              <Info />
            </React.Suspense>
          }/>
          <Route path="contact" element={
            <React.Suspense fallback={<>...</>}>
              <Contact />
            </React.Suspense>
          }/>
          <Route path="*" element={<NotMatch />} />
        </Route>
      </Routes>
    </div>
  );
}

function Layout() {
  return (
    <div>
      <nav>
        <Link to="/home">Home</Link> |
        <Link to="/home/info">Info</Link> |
        <Link to="/home/contact">Contact us</Link>
      </nav>
      <hr />
      <Outlet />
    </div>
  );
}

function NotMatch() {
  return(
    <div>
      <h2>Error 404 - File not found</h2>
      <Link to="/home">Go to home page</Link>
    </div>
  );
}