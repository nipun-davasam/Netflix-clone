import React, { useEffect, useState } from "react";
import "./Player.css";
import backarrow from "../../assets/back_arrow_icon.png";
import { useNavigate, useParams } from "react-router-dom";

const Player = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [playerData, setPlayerData] = useState({
    name: "",
    key: "",
    published_at: "",
    type: "",
  });
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZGIyYWVkNGY4N2EzNzc0OTQ2OGU4NjBlNmU5MzM1MiIsIm5iZiI6MTc1OTc0NzY5Ny42NzM5OTk4LCJzdWIiOiI2OGUzOWU3MTBjYTM5NDk3ZDg2MTdjMmIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.e2DGozHxPubKBfrMjOcdHRDj2zEEfc6SCozFnsSpf2Y",
    },
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      options
    )
      .then((res) => res.json())
      .then((res) => setPlayerData(res.results[0]))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="player">
      <img
        src={backarrow}
        alt=""
        onClick={() => {
          navigate(-1);
        }}
      />
      <iframe
        width="90%"
        height="90%"
        src={`https://www.youtube.com/embed/${playerData.key}`}
        title="trailer"
        allowFullScreen
        frameborder="0"
      ></iframe>
      <div className="player-info">
        <p>{playerData.published_at.slice(0, 10)}</p>
        <p>{playerData.name}</p>
        <p>{playerData.type}</p>
      </div>
    </div>
  );
};
export default Player;
