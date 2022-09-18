import React, { useState, useEffect } from "react";
import "./Product.css";
import Search from "./Search";


function Products(props) {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const loadData = async () => {
    await fetch("https://fakestoreapi.com/products/")
      .then((response) => response.json())
      .then((ReceivedData) => setData(ReceivedData));
  };
  useEffect(() => {
    loadData();
  }, [searchTerm]);

  return (
    <>
    <h1 className="text-center p-4" id="judul">List of Products</h1>
    <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
    <div className="item">
  
    {data.filter((datas)=> datas.title.toLowerCase().includes(searchTerm.toLowerCase())).map((datas, index) => ( 
        <div
        key={index}
        className=" h-100 text-center p-7"
        style={{ width: "18rem", border:"blue 2px solid", borderRadius:'10px'}}
      >
        <img  className="animation" src={datas.image} alt={datas.image} />
        <div className="card-body">
          <h5 className="card-title">{datas.title}</h5>
          <h5 className="card-text ">{datas.category}</h5>
          <h6 className="card-text">$ {datas.price}</h6>
          <button className="btn btn-primary btn-center m-3" value={props.count} onClick={() => props.setCount(props.count+1)} >
           Add to cart
          </button>
        </div>
      </div>
      ))}
    </div>
    </>
  );
}

export default Products;
