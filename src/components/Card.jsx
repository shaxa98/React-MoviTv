const CardComponent = ({ imgUrl, title, description }) => {
  return (
    <div className="card">
      <img src={imgUrl} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        {/* <p class="card-text">{description}</p> */}
      </div>{" "}
    </div>
  );
};

export default CardComponent;
