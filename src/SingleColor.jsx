import React from "react";
import { toast } from "react-toastify";

const SingleColor = ({ item, index }) => {
  const { hex, weight, id } = item;

  const clickHandler = async () => {
    try {
      await navigator.clipboard.writeText(hex);
      toast.success(`Text copied to clipboard: #${hex}`);
    } catch (error) {
      toast.error("Failed to copy text: ", error);
    }
  };

  return (
    <div
      onClick={clickHandler}
      key={id}
      className="color"
      style={{
        backgroundColor: `#${hex}`,
      }}
    >
      <p
        style={{
          color: index > 10 ? "white" : "black",
        }}
      >
        #{hex}
      </p>
      <p
        style={{
          color: index > 10 ? "white" : "black",
        }}
      >
        {weight}%
      </p>
    </div>
  );
};

export default SingleColor;
