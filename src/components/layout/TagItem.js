import React, { useContext } from "react";
import SearchContext from "../../context/Search/SearchContext";

const TagItem = ({ tag }) => {
  const searchContext = useContext(SearchContext);
  const srchTag = () => {
    searchContext.srchImg(tag.tagName);
  };
  return (
    <div className='chip tags' onClick={srchTag}>
      {tag.tagName}
    </div>
  );
};

export default TagItem;
