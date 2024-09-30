// import { Counter } from "./components/counter/Counter";
import { useState } from "react";
import Header from "./components/movie/Header";
import { MoviList } from "./components/movie/MoviList";
import { Modalka } from "./components/movie/UI/Modalka";
import { MOVIES_DATA } from "./components/utils/constants";
// import { Todos } from "./components/Todos";

function App() {
  const [movies, setMovies] = useState(MOVIES_DATA);
  const addMoviesHandler = (movieData) => {
    setMovies([...movies, movieData]);
  };

  const handlerRemoveItem = (movieId) => {
    setMovies(movies.filter((item) => item.id !== movieId))

  };

  return (
    <div className="todos">
      {/* <Todos/> */}
      {/* <Counter /> */}
      <Header onAddMovies={addMoviesHandler}/>
      <MoviList movies={movies} onhandlerRemoveItem={handlerRemoveItem} />
    </div>
  );
}

export default App;

// const newTodos = 
