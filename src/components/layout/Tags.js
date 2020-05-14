import React, { useState } from "react";
import TagItem from "./TagItem";

const Tags = () => {
  const [tags, setTags] = useState([
    { id: 1, tagName: "culture" },
    { id: 2, tagName: "culture" },
    { id: 3, tagName: "food" },
    { id: 4, tagName: "movies" },
    { id: 5, tagName: "video games" },
    { id: 6, tagName: "music" },
    { id: 7, tagName: "business" },
    { id: 8, tagName: "life" },
    { id: 9, tagName: "animals" },
    { id: 10, tagName: "fun" },
    { id: 11, tagName: "trends" },
    { id: 12, tagName: "education" },
  ]);
  return (
    <div className='tags-holder hide-on-small-only'>
      {tags.map((tag) => (
        <TagItem tag={tag} key={tag.id} />
      ))}
    </div>
  );
};

export default Tags;
