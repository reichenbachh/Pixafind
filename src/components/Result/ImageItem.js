import React, { useContext } from "react";
import { Link } from "react-router-dom";
import SearchContext from "../../context/Search/SearchContext";

const ImageItem = ({ image: { urls, user, likes, views, id } }) => {
  const searchContext = useContext(SearchContext);
  return (
    <div className='image-holder'>
      <Link to={`/imageDetails/${id}`}>
        <img src={urls.small} alt='' srcSet='' />
      </Link>
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
    </div>
  );
};

export default ImageItem;
