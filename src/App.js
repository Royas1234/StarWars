import { Route, Routes } from "react-router-dom";
import StarWars from "../src/Components/Star-Wars"
import './App.css';
import MovieDetail from "./Components/movieDetail";

function App() {
  return (
    <div className="App">
      {/* <StarWars /> */}
  
      <Routes>
        <Route path="/movie/:id" element={<MovieDetail/>}/>
        <Route path="/" element={<StarWars/>}/>
      </Routes>
    </div>
  );
}

export default App;
