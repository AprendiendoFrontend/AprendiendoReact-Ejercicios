import React, { Fragment } from "react";
import ServiceMarkdown from "@s-ui/react-services-markdown";
const HOME_DATA =
  "https://raw.githubusercontent.com/AprendiendoFrontend/AprendiendoReact-Ejercicios/master/README.md";

const Homepage = props => {
  return (
    <Fragment>
      <ServiceMarkdown src={HOME_DATA} />
    </Fragment>
  );
};

export default Homepage;
