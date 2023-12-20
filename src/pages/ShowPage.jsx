import BreadcrumbComponent from "../components/Breadcrumb";
import CardContainer from "../components/CardContainer";
import { useEffect, useState } from "react";
import LoaderComponent from "../components/LoaderComponent";

const ShowPage = () => {
  const [showsState, updateShows] = useState([]);
  const [loading, updateLoading] = useState(true);
  // const stateVal = res[0]
  // const digarMekadagiFuc = res[1]
  useEffect(() => {
    fetch("https://api.tvmaze.com/shows")
      .then((response) => response.json())
      .then((data) => {
        const newData = data.map((el) => {
          el["imgUrl"] = el?.image?.medium
            ? el?.image?.medium
            : "https://www.pulsecarshalton.co.uk/wp-content/uploads/2016/08/jk-placeholder-image-768x518.jpg";
          return el;
        });
        updateShows(newData);
        updateLoading(false);
      });
  }, []);

  return (
    <div className="container ">
      <BreadcrumbComponent page="Show" />
      {loading ? (
        <LoaderComponent />
      ) : (
        <CardContainer data={showsState} type="shows" />
      )}
      {/* {loading ?  <LoaderComponent /> : null} */}
      {/* {loading == true?  <LoaderComponent /> : null} */}
    </div>
  );
};

export default ShowPage;
