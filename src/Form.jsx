import React, { useState } from "react";

const Form = ({addColor}) => {
  const [color, setColor] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    addColor(color)
  };
  return (
    <div className="container">
      <h3>Color generator</h3>
      <form className="color-form" onSubmit={handleSubmit}>
        <input
          type="color"
          onChange={(e) => setColor(e.target.value)}
          value={color}
          
        />
        <input
          type="text"
          onChange={(e) => setColor(e.target.value)}
          value={color}
          placeholder="#f15025"
          maxLength={7}
        />
        <button type="submit" className="btn" style={{ background: color }}>
          Generate
        </button>
      </form>
    </div>
  );
};

export default Form;
