import React, { Fragment } from "react";
import Search from "../Search";
import Image from "../Result/Image";
import Error from "../layout/Error";
import Nav from "../layout/Nav";

const StartupPage = () => {
  return (
    <Fragment>
      <Nav />
      <Error />
      <Search />
      <Image />
    </Fragment>
  );
};

export default StartupPage;
