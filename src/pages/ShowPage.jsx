import BreadcrumbComponent from "../components/Breadcrumb";
import CardContainer from "../components/CardContainer";
import shows from "./shows";

const ShowPage = () => {
  return (
    <div className="container ">
      <BreadcrumbComponent page="Show" />
      <CardContainer data={shows} />
    </div>
  );
};

export default ShowPage;
