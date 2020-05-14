import React from "react";

const ImageItem = ({ image: { urls, user, likes, views } }) => {
  return (
    <div className='image-holder'>
      <img src={urls.small} alt='' srcSet='' />
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
