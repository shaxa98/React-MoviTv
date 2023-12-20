const CardComponent = ({ id, imgUrl, title, description, type }) => {
  return (
    <div className="card">
      <img src={imgUrl} className="card-img-top" />
      <div className="card-body">
        <a href={`/${type}/${id}`}>
          <h5 className="card-title">{title}</h5>
        </a>
        {/* <p class="card-text">{description}</p> */}
      </div>{" "}
    </div>
  );
};

export default CardComponent;
