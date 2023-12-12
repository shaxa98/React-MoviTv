import CardComponent from "./Card";

const CardContainer = ({ data }) => {
  return (
    <div className="d-flex flex-wrap">
      {data.map((el, idx) => (
        <CardComponent key={idx} imgUrl={el.imgUrl} title={el.name} />
      ))}
    </div>
  );
};

export default CardContainer;
