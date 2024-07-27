import { Link, useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  console.log(error);

  return (
    <div className="error-container">
      <h1>Something went wrong</h1>
      <p>{error.data || error.message}</p>

      <Link to={-1} className="add-transaction-link">
        Go Back
      </Link>
    </div>
  );
};

export default Error;
