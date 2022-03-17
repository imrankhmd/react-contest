import axios from "axios";
import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import "./Movies.css";

const genres = ["Comedy", "Thriller", "Drama", "Documentary", "Children"];

export const MoviesDashboard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios({
      method: "get",
      url: "https://movie-fake-server.herokuapp.com/data",
    })
      .then((response) => setData(response.data))
      .catch((err) => console.log(err));
  }, []);
  const handleFilter = (e) => {
    axios({
      method: "get",
      url: `https://movie-fake-server.herokuapp.com/data?q=${e.target.value}`,
    })
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  };
  return (
    <>
      <h2>Movies</h2>
      <select onChange={handleFilter}>
        {genres.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </select>

      <div className="movies-list">
        {data.map((item, index) => (
          <div>
            <img
              key={index}
              src={item.image_url}
              alt="img"
            />
            <h2>Heading: {item.movie_name}</h2>
            <h3>Genre:{item.genre}</h3>
            <p>Rating: {item.rating}</p>
          </div>
        ))}
      </div>
    </>
  );
};