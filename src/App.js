import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import MovieList from "./components/movieList/MovieList";
import MovieDetail from "./pages/movieDetail/MovieDetail";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route index element={<Home />}></Route>
          <Route path="movie/:id" element={<MovieDetail />}></Route>
          <Route path="movies/:type" element={<MovieList />}></Route>
          <Route path="/*" element={<h1>error</h1>}></Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
