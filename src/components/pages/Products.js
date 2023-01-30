import React, { useEffect, useState } from "react";
import "../pagecss/product.css";
import axios from "axios";
import Header from "./Header";

export default function Products() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  console.log(data);

  useEffect(() => {
    setLoading(true);
    axios({
      method: "GET",
      url: "https://fakestoreapi.com/products",
    })
      .then((res) => {
        // console.log(res.data);
        setData(res.data);
      })

      .catch((e) => console.log(e))

      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      <div>
        {/* <Header></Header> */}
        <div className="main-div-2">
          {loading && (
            <div>
              <h1>Loading...</h1>
            </div>
          )}

          {data.map((products) => (
            <div key={products.id} className="pcard">
              <div className="products-img">
                <img
                  src={products.image}
                  style={{ height: "150px", width: "120px" }}
                />
              </div>
              <br />
              <br />
              <br />
              <br />
              <br />

              <br />
              <div className="products-name"> {products.title}</div>
              <br />

              <div className="products-price"> {products.price}</div>
              <br />

              <div className="products-category"> {products.category}</div>
              <br />

              <div className="products-discription">
                {" "}
                {products.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
