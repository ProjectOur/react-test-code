import "@/index.scss";
import Main from "@pages/Main";
import "dotenv";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

function App() {
  const routes = [{ path: "/", element: <Main /> }];
  return (
    <Router>
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
    </Router>
  );
}

export default App;
