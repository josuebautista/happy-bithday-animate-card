import React, { useContext, useState, useEffect } from "react";
import { useWindowSize } from "react-use";
import { client } from "./client";

const AppContext = React.createContext()


const AppProvider = ({ children }) => {
  const { width, height } = useWindowSize();
  const [ganyu, setGanyu] = useState(null);
  const [ereshkigal, setEreshkigal] = useState(null);
  const [miku, setMiku] = useState(null);
  const [tlaloc, setTlaloc] = useState(null);

  useEffect(() => {
    const getServerSideProps = async () => {
      const query = '*[_type == "waifu"]';
      const waifus = await client.fetch(query);
      setMiku(waifus[0]);
      setEreshkigal(waifus[1]);
      setTlaloc(waifus[2]);
      setGanyu(waifus[3]);
    }
    getServerSideProps();
  }, [])

  return <AppContext.Provider value={{
    width,
    height,
    ganyu,
    ereshkigal,
    miku,
    tlaloc,
  }}>
    {children}
  </AppContext.Provider>
}

export const useGlobalContext = () => {
  return useContext(AppContext);
}

export { AppContext, AppProvider }