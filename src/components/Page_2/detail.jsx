import { useContext } from "react";
import PageContext from "../context/pageContext";
import styles from "./detail.module.css";

const Details = () => {
  const { page, setPage, setState, state, darkTheme } = useContext(PageContext);
  // console.log(page.name);
  const themeT = {
    color: darkTheme ? "white" : "black",
    border: darkTheme ? "none" : "none",
  };
  return (
    <>
      <div className={styles.button1}>
        <button onClick={() => setState(!state)}>Back</button>
      </div>
      <div className={styles.container}>
        <div className={styles.box1}>
          <div className={styles.image_wrapper}>
            <img src={page.flag} alt="" />
          </div>
        </div>
        <div className={styles.info}>
          <h2>{page.name}</h2>
          <div className={styles.flex}>
            <div>
              <p>
                Native Name:<i>{page.nativeName}</i>
              </p>
              <p>Population:{page.population}</p>
              <p>
                Region :<i>{page.region}</i>
              </p>
              <p>
                {" "}
                Sub-Region:<i>{page.subregion}</i>
              </p>
              <p>
                Capital:<i>{page.capital}</i>
              </p>
            </div>
            <div>
              <p>
                Top level Domain:<i>{page.topLevelDomain}</i>
              </p>
              {page.languages &&
                page.languages.map((each, index) => {
                  return (
                    <p>
                      Language:<i>{each.name && each.name} </i>
                    </p>
                  );
                })}

              {page.currencies &&
                page.currencies.map((i, e) => {
                  return (
                    <p>
                      Currency:
                      <i>
                        {" "}
                        {i.name && i.name} {i.symbol && i.symbol}
                      </i>
                    </p>
                  );
                })}
            </div>
          </div>
          <div className={styles.flex1}>
            <h3>Country Borders :</h3>
            <button style={themeT}>
              {page.borders ? page.borders[0] : "Not avail"}
            </button>
            <button style={themeT}>
              {page.borders ? page.borders[1] : "Not Avail."}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
