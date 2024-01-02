import Body from "./components/Body";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { createBrowserRouter } from "react-router-dom";
import Login from "./components/Login";
import Browse from "./components/Browse";
import MovieInfo from "./components/MovieInfo";
function App() {
  return (
    <div className="container mx-auto  login-background  bg-contain ">
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "/browse",
        element: <Browse />,
      },
      {
        path: "/movie/:movieId",
        element: <MovieInfo />,
      },
    ],
  },
]);
export default App;
