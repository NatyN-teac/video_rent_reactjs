import React, { Component } from "react";
import { getMovies, deleteMovie } from "../services/fakeMovieService";
import Like from "./common/Like";

class Movies extends Component {
  state = {
    movies: getMovies(),
  };

  handleDelete = (id) => {
    deleteMovie(id);
    this.setState({ movie: getMovies() });
  };

  handleLike = (movie) => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;

    this.setState({ movies });
  };

  render() {
    console.log(this.state.movies);
    return (
      <React.Fragment>
        <div>
          {this.state.movies.length > 0 ? (
            <p>Showing {this.state.movies.length} movies in database.</p>
          ) : (
            <p>There is no movie available</p>
          )}
        </div>
        <div>
          {this.state.movies.length !== 0 ? (
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Title</th>
                  <th scope="col">Genre</th>
                  <th scope="col">Stock</th>
                  <th scope="col">Rate</th>
                  <th scope="col">Like</th>
                </tr>
              </thead>
              <tbody>
                {this.state.movies.map((movie) => (
                  <tr key={movie._id}>
                    <th scope="row">{movie.title}</th>
                    <td>{movie.genre.name}</td>
                    <td>{movie.numberInStock}</td>
                    <td>{movie.dailyRentalRate}</td>
                    <td>
                      {" "}
                      <Like
                        liked={movie.liked}
                        onClick={() => this.handleLike(movie)}
                      />
                    </td>
                    <td>
                      <button
                        className="btn btn-danger"
                        onClick={() => this.handleDelete(movie._id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>There is no Data in Database</p>
          )}
        </div>
      </React.Fragment>
    );
  }
}

export default Movies;
