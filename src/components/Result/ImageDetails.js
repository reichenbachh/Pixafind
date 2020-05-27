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

  if (loading || imageInfo === null) return <Preloader />;
  else if (imageInfo) {
    return (
      <Fragment>
        <div className='imageDetails-wrapper'>
          <div className='row'>
            <div className='full-image col s9'>
              <img src={imageInfo.urls.regular} className='full-image' alt='' />
            </div>
            <div className='image-details col s3'>
              <div className='row'>
                <div className='profile'>
                  <div>
                    <img
                      src={imageInfo.user.profile_image.medium}
                      className='circle'
                      alt=''
                    />
                  </div>
                  <div>
                    <p className='user-name'>{imageInfo.user.username}</p>
                  </div>
                </div>
                <div className='bio'>
                  {imageInfo.user.bio && <p>Bio:{imageInfo.user.bio}</p>}
                </div>
                <div className='social'>
                  <div className='insta'>
                    {imageInfo.user.instagram_username && (
                      <p>
                        <i className='fab fa-instagram'></i>
                        {imageInfo.user.instagram_username}
                      </p>
                    )}
                  </div>
                  <div className='twitter'>
                    {imageInfo.user.twitter_username && (
                      <p>
                        <i className='fab fa-twitter'></i>
                        {imageInfo.user.twitter_username}
                      </p>
                    )}
                  </div>
                </div>
                {imageInfo.user.portfolio_url && (
                  <div className='portfolio'>
                    <a
                      target='_blank'
                      rel='noopener noreferrer'
                      href={imageInfo.user.portfolio_url}
                    >
                      <p>Visit Artist's Portfolio?</p>
                    </a>
                  </div>
                )}
                <div className='image-description'>
                  <p>Description:{imageInfo.alt_description}</p>
                </div>
                <div className='stats'>
                  <div>
                    <p>
                      <i className='fas fa-eye'></i>
                      {imageInfo.views}
                    </p>
                  </div>
                  <div>
                    <p>
                      <i className='fas fa-heart'></i>
                      {imageInfo.likes}
                    </p>
                  </div>
                </div>
                <div className='location'>
                  {imageInfo.location.city && (
                    <p>
                      <i class='fas fa-map-marker-alt'></i>
                      {imageInfo.location.city}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
};

export default ImageDetails;
