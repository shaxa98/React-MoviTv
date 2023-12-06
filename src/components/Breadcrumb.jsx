const BreadcrumbComponent = (props) => {
  return (
    <nav aria-label="breadcrumb " className="my-4">
      <ol className="breadcrumb bg-body-secondary p-3 rounded">
        <li className="breadcrumb-item" id="breadcrumb-item">
          <a href="#" id="homeBtn">
            {" "}
            Home /{props.page}
          </a>
        </li>
      </ol>
    </nav>
  );
};
export default BreadcrumbComponent;
