import CardComponent from "./Card";

const CardContainer = ({ data, type }) => {
  return (
    <div className="d-flex flex-wrap">
      {data.map((el, idx) => (
        <CardComponent
          key={idx}
          imgUrl={el.imgUrl}
          title={el.name}
          id={el.id}
          type={type}
        />
      ))}
    </div>
  );
};

export default CardContainer;
