import React, { useEffect, useContext } from "react";
import SearchContext from "../../context/Search/SearchContext";
import Preloader from "../layout/Preloader";

const ImageDetails = ({ match }) => {
  const searchContext = useContext(SearchContext);
  const { imageInfo, loading, fetchImgInfo, clearCurrent } = searchContext;
  useEffect(() => {
    clearCurrent();
    fetchImgInfo(match.params.id);
    // eslint-disable-next-line
  }, []);

  if (loading || imageInfo === null) return <Preloader />;
  else if (imageInfo) {
    return (
      <div className='imageDetails-wrapper'>
        <div className='row'>
          <div className='full-image col  s12 m5 l7'>
            <img src={imageInfo.urls.regular} className='full-image' alt='' />
          </div>
          <div className='image-details col s12 m5 l4'>
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
              <div>
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
    );
  }
};

export default ImageDetails;
