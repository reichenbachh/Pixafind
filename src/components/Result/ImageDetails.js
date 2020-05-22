import React, { useContext, useEffect } from "react";
import SearchContext from "../../context/Search/SearchContext";

const ImageDetails = () => {
  const searchContext = useContext(SearchContext);
  const { details } = searchContext;
  const { user } = details;

  return (
    <div id='image-detail-modal' class='modal'>
      <div class='modal-content'>
        <h4>{details.alt_description}</h4>
      </div>
      <div class='modal-footer'>
        <a href='#!' class='modal-close waves-effect waves-green btn-flat'>
          Agree
        </a>
      </div>
    </div>
  );
};

export default ImageDetails;
