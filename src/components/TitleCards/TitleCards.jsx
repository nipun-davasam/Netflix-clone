import "./TitleCards.css";
import cards_data from "../../assets/cards/Cards_data";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const TitleCards = ({ title, category }) => {
  const cardsRef = useRef();
  const [apiData, setApiData] = useState([]);

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZGIyYWVkNGY4N2EzNzc0OTQ2OGU4NjBlNmU5MzM1MiIsIm5iZiI6MTc1OTc0NzY5Ny42NzM5OTk4LCJzdWIiOiI2OGUzOWU3MTBjYTM5NDk3ZDg2MTdjMmIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.e2DGozHxPubKBfrMjOcdHRDj2zEEfc6SCozFnsSpf2Y",
    },
  };

  const handleWheel = (e) => {
    e.preventDefault();
    cardsRef.current.scrollLeft += e.deltaY;
  };

  useEffect(() => {
    cardsRef.current.addEventListener("wheel", handleWheel);
    fetch(
      `https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`,
      options
    )
      .then((res) => res.json())
      .then((res) => setApiData(res.results))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="titlecards">
      <h2>{title ? title : "Popular on Netflix"}</h2>
      <div className="cards-list" ref={cardsRef}>
        {apiData.map((data, index) => {
          return (
            <Link className="card" key={index} to={`/player/${data.id}`}>
              <img src={`https://image.tmdb.org/t/p/w500`+data.backdrop_path} alt="" />
              <p>{data.original_title}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default TitleCards;
