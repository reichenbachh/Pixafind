import React, { useState } from "react";
import TagItem from "./TagItem";

const Tags = () => {
  const [tags, setTags] = useState([
    "culture",
    "food",
    "movies",
    "video games",
    "music",
    "business",
    "life",
    "animals",
  ]);
  return (
    <div className='tags-holder'>
      {tags.map((tag) => (
        <TagItem tag={tag} />
      ))}
    </div>
  );
};

export default Tags;
