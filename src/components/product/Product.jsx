import React from "react";
import './product.css';
export default function Product(props) {
  return (
    <>
      <div className="col-md-4">
        <div className="product py-3">
          <h2 className="text-center">{props.title}</h2>
          <p className="text-center">{props.desc}</p>
        </div>
      </div>
    </>
  );
}
