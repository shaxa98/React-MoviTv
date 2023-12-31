import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const AboutMove = () => {
  const params = useParams();
  const [people, updatepeople] = useState({});

  useEffect(() => {
    const { peopleId } = params;
    fetch(`https://api.tvmaze.com/people/${peopleId}`)
      .then((response) => response.json())
      .then((data) => {
        updatepeople(data);
      });
  }, []);

  return (
    <div
      className="aboutMovi"
      style={{
        backgroundImage: `url(${people.image?.original})`,
      }}
    >
      <div className="aboutMovi-img">
        <img width="100%" src={people.image?.medium} alt="" />
        <button className="aboutMovi-img-btn">Watch</button>
      </div>
      <div className="aboutMovi-description">
        <div className="aboutMovi-description-title">{people.name}</div>
        <div className="aboutMovi-description-genre">
          {people?.genres?.map((genre) => (
            <span key={genre}>{genre}</span>
          ))}
        </div>
        <div
          className="aboutMovi-description-p"
          dangerouslySetInnerHTML={{ __html: people.summary }}
        ></div>
      </div>
    </div>
  );
};

export default AboutMove;
