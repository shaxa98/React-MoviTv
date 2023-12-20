import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const AboutMove = () => {
  const params = useParams();
  const [show, updateShow] = useState({});

  useEffect(() => {
    const { showId } = params;
    fetch(`https://api.tvmaze.com/shows/${showId}`)
      .then((response) => response.json())
      .then((data) => {
        updateShow(data);
      });
  }, []);

  return (
    <div
      className="aboutMovi"
      style={{
        backgroundImage: `url(${show.image?.original})`,
      }}
    >
      <div className="aboutMovi-img">
        <img width="100%" src={show.image?.medium} alt="" />
        <button className="aboutMovi-img-btn">Watch</button>
      </div>
      <div className="aboutMovi-description">
        <div className="aboutMovi-description-title">{show.name}</div>
        <div className="aboutMovi-description-genre">
          {show?.genres?.map((genre) => (
            <span key={genre}>{genre}</span>
          ))}
        </div>
        <div
          className="aboutMovi-description-p"
          dangerouslySetInnerHTML={{ __html: show.summary }}
        ></div>
      </div>
    </div>
  );
};

export default AboutMove;
