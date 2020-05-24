import React, { useContext } from "react";
import ImageDetails from "./ImageDetails";
import SearchContext from "../../context/Search/SearchContext";

const ImageItem = ({ count, image: { urls, user, likes, views, id } }) => {
  const searchContext = useContext(SearchContext);
  return (
    <div className='image-holder'>
      <a
        href='#image-detail-modal'
        className='modal-trigger'
        onClick={() => searchContext.fetchInfo(id)}
      >
        <img src={urls.small} alt='' srcSet='' />
      </a>
      <div className='info'>
        <div className='name'>{user.first_name}</div>
        <div className='info-secondary'>
          <p>
            <i className='fas fa-heart'></i>
            {likes}
          </p>
          <p>
            <i className='fas fa-eye'></i>
            {views}
          </p>
        </div>
      </div>
      <ImageDetails bio={user.bio} />
    </div>
  );
};

export default ImageItem;
