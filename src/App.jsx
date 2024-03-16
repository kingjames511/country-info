import styles from "./App.module.css";
import CountryList from "./components/List/list";
import Header from "./components/Header/Header";
import PageContext from "./components/context/pageContext";
import Details from "./components/Page_2/detail";
import Filtered from "./components/filtered/filtered";
import { useState } from "react";
import { Data } from "./data";
function App() {
  const [page, setPage] = useState();
  const [state, setState] = useState(false);
  const [input, setInput] = useState("");
  const [input2, setInput2] = useState({});
  const [render, setRender] = useState(false);
  const [darkTheme, setDarkTheme] = useState(false);

  const Theme = {
    backgroundColor: darkTheme ? "hsl(207, 26%, 17%)" : " hsl(0, 0%, 98%)",
    color: darkTheme ? "white" : "hsl(200, 15%, 8%)",
  };

  // console.log(page);
  return (
    <>
      <div style={Theme} className={styles.App}>
        <PageContext.Provider
          value={{
            page,
            setPage,
            state,
            setState,
            input,
            setInput,
            setRender,
            render,
            setInput2,
            input2,
            darkTheme,
            setDarkTheme,
          }}
        >
          <Header />
          {!state && <CountryList />}
          {state && <Details />}
          {render && !state && <Filtered />}
        </PageContext.Provider>
      </div>
    </>
  );
}

export default App;
