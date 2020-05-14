import React, { useEffect, useContext } from "react";
import ImageItem from "./ImageItem";
import Preloader from "../layout/Preloader";
import SearchContext from "../../context/Search/SearchContext";

const Image = () => {
  const searchContext = useContext(SearchContext);
  const { getRandImg, images, loading, rand } = searchContext;

  useEffect(() => {
    getRandImg();
    //eslint-disable-next-line
  }, []);

  if (loading === true) {
    return <Preloader />;
  } else if (rand) {
    return (
      <div className='image-container'>
        {images.map((image) => (
          <ImageItem image={image} key={image.id} />
        ))}
      </div>
    );
  } else {
    return (
      <div className='image-container'>
        {images.results.map((image) => (
          <ImageItem image={image} key={image.id} />
        ))}
      </div>
    );
  }
};

export default Image;
