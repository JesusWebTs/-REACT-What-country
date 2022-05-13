import React from "react";

let separateSpanText = ({ letters = "", word = "", className = "" }) => {
  let _word = word.toLowerCase();
  return (
    <>
      {word.slice(0, _word.indexOf(letters.toLowerCase()))}
      <span className={className}>
        {word.slice(
          _word.indexOf(letters.toLowerCase()),
          _word.indexOf(letters.toLowerCase()) + letters.length
        )}
      </span>
      {word.slice(
        _word.indexOf(letters.toLowerCase()) + letters.length,
        word.length
      )}
    </>
  );
};
export default separateSpanText;
