import React from "react";
import { v4 as uuid } from "uuid";
import SingleColor from "./SingleColor";

const ColorList = ({ colors }) => {
  return (
    <section className="colors">
      {colors.map((item,index) => {
        const id = uuid();
        return <SingleColor key={id} item={item} index={index}/>;
      })}
    </section>
  );
};

export default ColorList;
