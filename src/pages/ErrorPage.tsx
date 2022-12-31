import React from 'react';
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError() as { statusText: string; message: string; };
  console.error(error);
  return (
    <div>
      <h1>oops!</h1>
      <p>An unexpected error occured</p>
      <p>
        <i>{error?.statusText || error?.message}</i>
      </p>
    </div>
  )
}

export default ErrorPage