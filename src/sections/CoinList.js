import React, { useState, useEffect } from "react";
import { getcoin } from "../components/api";
import Coin from "../components/Coin";
import '../styles/Coin.css'

const CoinList = () => {
  const [coins, setCoins] = useState([]);
  const [search,setSearch]=useState("")

  useEffect(() => {
    const fetchAPI = async () => {
      const data = await getcoin();
      setCoins(data);
    };

    fetchAPI();
  }, []);

  const searchHandler=(event)=>{
   setSearch(event.target.value)
  }

  const searchcoins=coins.filter(coin=>coin.name.toLowerCase().includes(search))

  return (
    <>
      <input type={"text"} placeholder={"Search"} value={search} onChange={searchHandler} />
      <section id="coinlist">
        <div className={'Coincontainer'}>
          {searchcoins.map((coin) => (
            <Coin
              key={coin.id}
              name={coin.name}
              image={coin.image}
              symbol={coin.symbol}
              price={coin.price}
              pricechange={coin.price_change_percentage_24h}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default CoinList;
