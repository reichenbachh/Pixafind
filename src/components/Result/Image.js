import React, { useEffect, useContext } from "react";
import Pagination from "../layout/Pagination";
import ImageItem from "./ImageItem";
import Preloader from "../layout/Preloader";
import SearchContext from "../../context/Search/SearchContext";

const Image = () => {
  const searchContext = useContext(SearchContext);
  const {
    getRandImg,
    images,
    randImages,
    loading,
    rand,
    totalResults,
    currentPage,
    query,
  } = searchContext;

  useEffect(() => {
    getRandImg();
    // eslint-disable-next-line
  }, []);

  const numberPages = Math.floor(totalResults / 30);
  if (loading === true) {
    return <Preloader />;
  } else if (rand) {
    return (
      <div className='image-container'>
        {randImages.map((image) => (
          <ImageItem image={image} data={image.location} key={image.id} />
        ))}
      </div>
    );
  } else {
    return (
      <div className='image-container'>
        {images.results.map((image) => (
          <ImageItem image={image} key={image.id} />
        ))}
        {totalResults > 30 ? (
          <Pagination
            pages={numberPages}
            currentPage={currentPage}
            query={query}
          />
        ) : (
          " "
        )}
      </div>
    );
  }
};

export default Image;
