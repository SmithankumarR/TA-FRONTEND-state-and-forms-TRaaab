import data from "../data.json";
import Movie from "./Movie";

function MovieList() {
  return (
    <ul className="flex justify-start align-start">
      {data.map((movie, i) => {
        return (
          <>
            <Movie key={movie.id} id={i} details={movie} />
          </>
        );
      })}
    </ul>
  );
}
export default MovieList;
