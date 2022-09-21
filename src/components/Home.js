import React from "react";
import { useEffect, useState } from "react";
import FilterForm from "../logic/FilterForm";
import Axios from "axios";
import Tickets from "./Tickets";

const stringComparer = (s1, s2) => s1.toLowerCase().includes(s2.toLowerCase());

const Home = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [showTickets, setShowTickets] = useState(false);
  const [filterMenu, setFilterMenu] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3001/api/getTickets").then((response) => {
      setMenuItems(response.data);
    });
  }, []);

  const filterHandler = (filterCity, filterBand, filterCode) => {
    setFilterMenu(
      menuItems.filter(
        (m) =>
          (!filterCity || stringComparer(m.Citta, filterCity)) &&
          (!filterBand || stringComparer(m.Gruppo, filterBand)) &&
          (!filterCode || stringComparer(m.CodiceReplica, filterCode))
      )
    );

    setShowTickets(true);
  };
  return (
    <>
      <FilterForm onFilter={filterHandler} />
      <div text="Menu"></div>
      {!showTickets && <Tickets tickets={menuItems} />}
      {showTickets && <Tickets tickets={filterMenu} />}{" "}
    </>
  );
};

export default Home;
