const AboutMove = () => {
  return (
    <div className="aboutMovi" id="aboutMovi">
      {" "}
      <div className="aboutMovi-img">
        <img
          width="100%"
          src="https://static.tvmaze.com/uploads/images/medium_portrait/81/202627.jpg"
          alt=""
        />
        <button className="aboutMovi-img-btn">Watch</button>
      </div>
      <div className="aboutMovi-description">
        <div className="aboutMovi-description-title">Under the Dome</div>
        <div className="aboutMovi-description-genre">
          <span>Drama</span>
          <span>Science-Fiction</span>
          <span>Thriller</span>
        </div>
        <div className="aboutMovi-description-p">
          <p>
            <b>Under the Dome</b> is the story of a small town that is suddenly
            and inexplicably sealed off from the rest of the world by an
            enormous transparent dome. The town's inhabitants must deal with
            surviving the post-apocalyptic conditions while searching for
            answers about the dome, where it came from and if and when it will
            go away.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMove;
