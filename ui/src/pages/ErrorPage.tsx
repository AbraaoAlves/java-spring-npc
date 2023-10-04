
import { useRouteError, isRouteErrorResponse } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Desculpe, um erro inesperado ocorreu.</p>
      {
        isRouteErrorResponse(error) &&
          <p>
            <i>{error.statusText}</i>
          </p>        
      }
      {
        error instanceof Error &&
          <p>
            <i>{error.message}</i>
          </p>        
      }
    </div>
  );
}
