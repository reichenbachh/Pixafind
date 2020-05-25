import React, { Fragment, useEffect, useContext } from "react";
import SearchContext from "../../context/Search/SearchContext";
import Preloader from "../layout/Preloader";

const ImageDetails = ({ match }) => {
  const searchContext = useContext(SearchContext);
  useEffect(() => {
    searchContext.fetchImgInfo(match.params.id);
    // eslint-disable-next-line
  }, []);
  const { imageInfo, loading } = searchContext;
  const {
    alt_description,
    likes,
    views,
    sponsorship,
    user,
    urls,
    location,
  } = imageInfo;

  if (loading) return <Preloader />;
  return (
    <Fragment>
      <p>{alt_description}</p>
      <p>{likes}</p>
      <p>{user.bio}</p>
      <img src={urls.small} alt='' />
    </Fragment>
  );
};

export default ImageDetails;
