import { useState, useEffect } from "react";
import "./styles.css";

export default function RandomColor() {
  const [typeOfColor, setTypeOfColor] = useState("hexColor");
  const [color, setColor] = useState("#000000");

  function randomize(length) {
    return Math.floor(Math.random() * length);
  }
  useEffect(() => {
    if (typeOfColor === "hexColor") handleHexColor();
    else handleRGBColor();
  }, [typeOfColor]);

  function handleHexColor() {
    let hexColor = "#";

    let hexadecimal = [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
    ];

    for (let i = 0; i < 6; i++) {
      hexColor += hexadecimal[randomize(hexadecimal.length)];
    }

    setColor(hexColor);
  }
  function handleRGBColor() {
    let r = randomize(255);
    let g = randomize(255);
    let b = randomize(255);

    const rgbColor = `rgb(${r}, ${g}, ${b})`;

    setColor(rgbColor);
  }

  function handleHSLColor() {
    let h = randomize(361);
    let s = randomize(101);
    let l = randomize(101);

    const hslColor = `hsl(${h}, ${s}, ${l})`;

    setColor(hslColor);
  }

  return (
    <div className="wrapper">
      <div className="container" style={{ "--color": color }}>
        <button onClick={() => setTypeOfColor("hslColor")}>
          ...Comming soon Color
        </button>
        <button onClick={() => setTypeOfColor("hslColor")}>
          Create HSL Color
        </button>
        <button onClick={() => setTypeOfColor("hexColor")}>
          Create Hex Color
        </button>
        <button onClick={() => setTypeOfColor("rgbColor")}>
          Create RGB Color
        </button>
        <button
          onClick={typeOfColor === "hexColor" ? handleHexColor : handleRGBColor}
        >
          Create Random Color
        </button>
        <div className="content">
          <h1>{typeOfColor === "hexColor" ? "HEX Color" : "RGB Color"}</h1>
          <p style={{ fontSize: "25px" }}>{color}</p>
        </div>
      </div>
    </div>
  );
}
