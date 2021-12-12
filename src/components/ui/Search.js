import React, { useState } from "react";

const Search = ({ getquery }) => {
  const [text, settext] = useState("");
  const Chng = (q) => {
    settext(q);
    getquery(q);
  };
  return (
    <section className="search">
      <form>
        <input
          type="text"
          className="form-control"
          placeholder="Search Character"
          onChange={(e) => Chng(e.target.value)}
          value={text}
          autoFocus
        />
      </form>
    </section>
  );
};
export default Search;
