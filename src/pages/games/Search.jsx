import React from "react";
import { InputPlain } from "../../inc/components/commons";

const Search = ({ debouncedFunction, reference }) => {
  return (
    <InputPlain
      placeholder="Search For Games"
      reference={reference}
      onChange={debouncedFunction}
    />
  );
};

export default Search;
