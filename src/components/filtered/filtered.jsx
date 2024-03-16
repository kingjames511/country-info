import { Data } from "../../data";
import { useContext } from "react";
import PageContext from "../context/pageContext";
import styles from "../../components/List/list.module.css";
const Filtered = () => {
  const { input2, page, setPage, setState } = useContext(PageContext);
  const items = Data;
  const getfiltereditems = (items, input2) => {
    if (!input2) {
      return items;
    }
    return items.map((filter, index) => {
      return filter.region.startsWith(input2) ? filter : items;
    });
  };

  const Filtered = getfiltereditems(items, input2);

  return (
    <>
      <>
        <div className={styles.list_container}>
          {Filtered.map((item, index) => {
            return (
              item.region && (
                <div
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
              )
            );
          })}
        </div>
      </>
    </>
  );
};

export default Filtered;
