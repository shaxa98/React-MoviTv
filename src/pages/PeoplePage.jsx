import BreadcrumbComponent from "../components/Breadcrumb";
import CardContainer from "../components/CardContainer";
import people from "./people";
const PeoplePage = () => {
  return (
    <div className="container ">
      <BreadcrumbComponent page="People" />
      <CardContainer data={people} />
    </div>
  );
};

export default PeoplePage;
