import React, { useEffect } from "react";
import Preview from "./Preview";
function Try() {
  useEffect(() => {
    const handleBeforeUnload = (event) => {
      event.preventDefault();
    };
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  });
  return (
    <React.Fragment>
      <Preview />
    </React.Fragment>
  );
}

export default Try;
