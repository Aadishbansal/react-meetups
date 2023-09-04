import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="container mt-2">
      <div className="row  ">
        <div className="col-8 col-lg-12 text-center">
          <p className=" ">
            <span className="bold fs-1">404</span>
            <span className="fs-4">Page not found</span>
          </p>
          <Link
            class="btn btn-secondary "
            role="button"
            aria-disabled="true"
            to="/"
          >
            Return to home
          </Link>
        </div>
      </div>
    </div>
  );
};
export default PageNotFound;
