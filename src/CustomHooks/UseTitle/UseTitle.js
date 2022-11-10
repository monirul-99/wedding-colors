import React, { useEffect } from "react";

const UseTitle = (title) => {
  useEffect(() => {
    document.title = `${title}  - Wedding Colors`;
  }, [title]);
};

export default UseTitle;
