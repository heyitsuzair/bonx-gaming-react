import React from "react";
import { InputPlain } from "../../inc/components/commons";

const Search = ({ debouncedFunction }) => {
  return (
    <InputPlain placeholder="Search For Games" onChange={debouncedFunction} />
  );
};

export default Search;
