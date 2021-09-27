import React, { useState } from "react";

const SeeMore = ({ children, number }) => {
  const [isShowMore, setisShowMore] = useState(false);

  const showMoreHandler = () => {
    setisShowMore(!isShowMore);
  };
  return (
    <>
      {children && children.length > number ? (
        <span>
          {`${isShowMore ? children : children.slice(0, number)}
           ${isShowMore ? " " : "..."}`}
          <span onClick={showMoreHandler} className="readMore">
            {isShowMore ? "Show Less" : "Show More"}
          </span>
        </span>
      ) : (
        children
      )}
    </>
  );
};

export default SeeMore;
