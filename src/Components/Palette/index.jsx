import React, { useEffect, useState } from "react";
import styles from "../../styles/Palette.module.css";
import ColorBox from "../ColorBox";
import Navbar from "../Navbar";
import { useParams } from "react-router-dom";
import { generatePalette } from "../../colorHelpers";
import Footer from "../Footer";
import { useSelector } from "react-redux";

const Palette = () => {
  const [level, setLevel] = useState(500);
  const [format, setFormat] = useState("hex");
  const { id } = useParams();
  // const seedColors = JSON.parse(localStorage.getItem("data"));
  const seedColors = useSelector((state) => state.palettes.value);

  console.log({ seedColors });

  const findPalette = (id) => seedColors?.find((palette) => palette.id === id);
  const palette = generatePalette(findPalette(id));

  const handleSliderChange = (val) => {
    setLevel(val);
  };

  const handleSelectedFormat = (val) => {
    setFormat(val);
  };

  const generateColorBoxes = () =>
    palette?.colors[level]?.map((color, i) => {
      return (
        <ColorBox
          key={i}
          fullHeight={false}
          background={color[format]}
          name={color.name}
          paletteId={id}
          colorId={color.id}
          showMore={true}
        />
      );
    });
  return (
    <div className={styles.palette}>
      <Navbar
        showLevel={true}
        level={level}
        handleChangeLevel={handleSliderChange}
        handleSelectedFormat={handleSelectedFormat}
      />
      <div className={styles.paletteColors}>{generateColorBoxes()}</div>
      {/* FOOTER */}
      <Footer palette={palette} />
    </div>
  );
};

export default Palette;
