import React, { Fragment } from "react";
import Search from "../Search";
import Image from "../Result/Image";
import Error from "../layout/Error";

const StartupPage = () => {
  return (
    <Fragment>
      <Error />
      <Search />
      <Image />
    </Fragment>
  );
};

export default StartupPage;
