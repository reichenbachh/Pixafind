import React, { useContext } from "react";
import SearchContext from "../../context/Search/SearchContext";

const Pagination = ({ pages, currentPage, query }) => {
  const searchContext = useContext(SearchContext);
  const pageLinks = [];
  const pag = () => {
    searchContext.nextpage(query);
  };
  for (let i = 1; i < pages + 1; i++) {
    let active = currentPage === i ? "active" : "";

    pageLinks.push(
      <li className={`waves-effect ${active}`} key={i} onClick={pag}>
        <a href='#'>{i}</a>{" "}
      </li>
    );
  }

  return <ul class='pagination'>{pageLinks}</ul>;
};

export default Pagination;
