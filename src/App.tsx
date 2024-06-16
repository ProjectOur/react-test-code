import "@/index.scss";
import "@styles/_reset.scss";
import Login from "@pages/login/Login";
import Main from "@pages/home/Home";
import "dotenv";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

function App() {
  //Router
  const routes = [
    { path: "/", element: <Main /> },
    { path: "/login", element: <Login /> },
  ];
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Routes>
      </Router>
      <ReactQueryDevtools initialIsOpen={true} />
    </QueryClientProvider>
  );
}

export default App;
