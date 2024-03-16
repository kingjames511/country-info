import styles from "./header.module.css";
import { useContext, useState } from "react";
import { Data } from "../../data";
import PageContext from "../context/pageContext";

const Header = () => {
  const {
    input,
    setInput,
    input2,
    setDarkTheme,
    darkTheme,
    setInput2,
    setRender,
  } = useContext(PageContext);
  // console.log(render);

  const Theme3 = {
    backgroundColor: darkTheme ? "hsl(209, 23%, 22%)" : "white",
    color: darkTheme ? "white" : "black",
    border: darkTheme ? "  1px solid hsl(209, 23%, 22%)" : "  1px solid grey",
  };
  const themeT = {
    color: darkTheme ? "white" : "black",
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.brand}>
          <h2>Where in the World ?</h2>
        </div>
        <div className={styles.button}>
          <button style={themeT} onClick={() => setDarkTheme(!darkTheme)}>
            Dark Mode
          </button>
        </div>
      </div>

      <div className={styles.search_container}>
        <div className={styles.search_wrapper}>
          <input
            style={Theme3}
            type="text"
            placeholder="Search for country"
            id=""
            onChange={(e) => {
              setInput(e.target.value);
              setRender(false);
            }}
          />{" "}
          <br />
          <i style={{ display: "block", margin: "6" + "px" }}>
            Dont forget to start with capital letter
          </i>
        </div>
        <div className={styles.search_wrapper1}>
          <select
            style={Theme3}
            name=""
            onChange={(e) => {
              setInput2(e.target.value), setRender(true);
            }}
          >
            <option value="">filter by region</option>
            <option value="Africa">Africa</option>
            <option value="Europe">Europe</option>
            <option value="Asia">Asia</option>
            <option value="Americas">Americas</option>
            <option value="Oceania">Oceania</option>
          </select>
        </div>
      </div>
    </>
  );
};

export default Header;
