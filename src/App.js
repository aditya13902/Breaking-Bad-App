import React, { useEffect, useState } from "react";
import "./styles.css";
import axios from "axios";
import Search from "./components/ui/Search";
import Header from "./components/ui/Header";
import CharacterGrid from "./components/characters/CharacterGrid";
export default function App() {
  const [items, setitems] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  const [query, setquery] = useState("");

  useEffect(() => {
    const fetchitem = async () => {
      const result = await axios(
        `https://www.breakingbadapi.com/api/characters?name=${query}`
      );
      console.log(result.data);
      setitems(result.data);
      setisLoading(false);
    };
    fetchitem();
  }, [query]);

  return (
    <div className="container">
      <Header />
      <Search getquery={(q) => setquery(q)} />
      <CharacterGrid isLoading={isLoading} items={items} />
    </div>
  );
}
