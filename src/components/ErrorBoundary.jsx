import { Fragment } from "react";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();

    return (
        <Fragment>
            <h1>Oops!</h1>
            <p>Sorry an unexpected error has occurred</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </Fragment>
    )
}

export default ErrorPage