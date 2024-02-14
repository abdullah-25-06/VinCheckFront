import axios from "axios";
import React, { useEffect, useState } from "react";

const DataContext = React.createContext({
  data: [],
});

export const DataContextProvider = (props) => {
  const [pricing, setPricing] = useState([]);
  useEffect(() => {
    async function Call() {
      try {
        const { data } = await axios.get("http://127.0.0.1:8000/package");
        setPricing(data);
      } catch (err) {
        console.log(err);
      }
    }
    Call();
    return () => {};
  }, []);

  return (
    <DataContext.Provider value={{ data: [...pricing] }}>
      {props.children}
    </DataContext.Provider>
  );
};
export default DataContext;
