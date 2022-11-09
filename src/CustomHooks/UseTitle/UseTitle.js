import React, { useEffect } from "react";

const UseTitle = (title) => {
  useEffect(() => {
    document.title = `${title}  - wedding Colors`;
  }, [title]);
};

export default UseTitle;
