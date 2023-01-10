import React from 'react';
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError() as { statusText: string; message: string; };
  const style = {
    "height": "100vh",
    "display": "flex",
    "flex-direction": "column",
    "justify-content": "center",
    "align-items": "center",
  }
  console.error(error);
  return (
    <div style={style}>
      <h1>oops!</h1>
      <p>An unexpected error occured</p>
      <p>
        <i>{error?.statusText || error?.message}</i>
      </p>
      <p>How about you head back <a href="/">home</a></p>
    </div>
  )
}

export default ErrorPage