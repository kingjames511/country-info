import styles from "./list.module.css";
import ima from "../../assets/Screenshot (2).png";
import { Data } from "../../data";
import PageContext from "../context/pageContext";
import { useContext, useState } from "react";

const getsearcheditems = (items, input, message) => {
  if (!input) {
    return items;
  }
  return items.filter((each) => {
    return each["name"] ? each["name"].includes(input) : message;
  });
};

const CountryList = () => {
  const { page, setPage, setState, render, input, setInput, darkTheme } =
    useContext(PageContext);
  const [message, setMessage] = useState(
    "No country found with that name Try searching for your country name starting with Capital letters"
  );

  const items = Data;

  const Searched = getsearcheditems(items, input, message);

  // console.log(Filtered);
  const Theme2 = {
    // backgroundColor: darkTheme ? "hsl(209, 23%, 22%)" : "white",
  };

  return (
    <>
      <div className={styles.list_container}>
        {!render &&
          Searched.map((item, index) => {
            return (
              <div
                style={Theme2}
                key={item.name}
                className={styles.box}
                onClick={() => {
                  setPage(item);
                  setState(true);

                  // console.log(page);
                }}
              >
                <div className={styles.image_wraper}>
                  <img src={item.flag} alt="flag photo" />
                </div>
                <div className={styles.list_info}>
                  <h2>{item.name}</h2>
                  <p>Population: {item.population}</p>

                  <p>Region: {item.region}</p>
                  <p>Capital: {item.capital}</p>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default CountryList;
