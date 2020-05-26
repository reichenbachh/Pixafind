import React, { Fragment, useState, useEffect, useContext } from "react";
import SearchContext from "../../context/Search/SearchContext";
import Preloader from "../layout/Preloader";

const ImageDetails = ({ match }) => {
  const searchContext = useContext(SearchContext);
  console.log(window.location.pathname);
  const { imageInfo, userInfo, loading, fetchImgInfo } = searchContext;

  console.log(userInfo);
  useEffect(() => {
    fetchImgInfo(match.params.id);
    // eslint-disable-next-line
  }, []);

  if (loading && imageInfo === null) return <Preloader />;
  else if (imageInfo) {
    return (
      <Fragment>
        <p>{imageInfo.alt_description}</p>
        <p>{imageInfo.likes}</p>
        <p>{imageInfo.user.bio}</p>
        <img src={imageInfo.urls.small} alt='' />
      </Fragment>
    );
  }
};

export default ImageDetails;
