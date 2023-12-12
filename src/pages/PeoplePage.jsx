import BreadcrumbComponent from "../components/Breadcrumb";
import CardContainer from "../components/CardContainer";
import { useEffect, useState } from "react";

const PeoplePage = () => {
  const [PeopleState, updatePeople] = useState([]);

  useEffect(() => {
    fetch("https://api.tvmaze.com/people")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        const newData = data.map((el) => {
          el["imgUrl"] = el?.image?.medium
            ? el?.image?.medium
            : "https://www.pulsecarshalton.co.uk/wp-content/uploads/2016/08/jk-placeholder-image-768x518.jpg";
          return el;
        });
        updatePeople(newData);
      });
  }, []);
  return (
    <div className="container ">
      <BreadcrumbComponent page="People" />
      <CardContainer data={PeopleState} />
    </div>
  );
};

export default PeoplePage;
