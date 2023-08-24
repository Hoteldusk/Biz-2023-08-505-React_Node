import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div>
      <h1>오메!</h1>
      <p>프로젝트에 문제가 생겼당께요</p>
      <p>{error.statusText || error.message}</p>
    </div>
  );
};

export default ErrorPage;
