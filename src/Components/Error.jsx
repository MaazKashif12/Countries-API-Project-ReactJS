import { useRouteError } from "react-router";

function Error() {
  const error = useRouteError();
  console.log(error);
  return <h1>Something Went Wrong {error.data} </h1>;
}

export default Error;
