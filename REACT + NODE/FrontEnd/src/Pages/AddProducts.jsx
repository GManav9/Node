import React, { useState } from "react";
import axios from "axios";

function AddProducts() {
  const [ProductName, SetproductName] = useState("");
  const [ProductPrice, SetproductPrice] = useState("");
  const [ProductImage, SetproductImage] = useState("");
  const [ProductCategory, SetproductCategory] = useState("");
  const [Record, Setrecord] = useState("");

  const handleAddProduct = async (e) => {
    e.preventDefault();

    let newProduct = {
      ProductName,
      ProductPrice,
      ProductImage,
      ProductCategory,
    };

    try {
      const response = await axios.post(
        "http://localhost:3000/products",
        newProduct
      );
      console.log("Product added:", response.data);
      Setrecord("Product added successfully!");

      SetproductName("");
      SetproductPrice("");
      SetproductImage("");
      SetproductCategory("");
    } catch (error) {
      console.error("Error adding product:", error);
      Setrecord("Error adding product.");
    }
  };

  return (
    <>
      <div className="text-center fs-3 my-2">Add Products</div>
      <div className="row">
        <div className="col-xl-4 col-8 col-sm-8 col-md-6 col-lg-6 m-auto border border-1 border-danger p-3 rounded">
          <form onSubmit={handleAddProduct}>
            <input
              type="text"
              className="form-control mt-3"
              placeholder="Enter the Product Name"
              value={ProductName}
              onChange={(e) => SetproductName(e.target.value)}
              required
            />
            <input
              type="text"
              className="form-control mt-3"
              placeholder="Enter the Product Price"
              value={ProductPrice}
              onChange={(e) => SetproductPrice(e.target.value)}
              required
            />
            <input
              type="text"
              className="form-control mt-3"
              placeholder="Enter the Product Image URL"
              value={ProductImage}
              onChange={(e) => SetproductImage(e.target.value)}
              required
            />
            <input
              type="text"
              className="form-control mt-3"
              placeholder="Enter the Product Category"
              value={ProductCategory}
              onChange={(e) => SetproductCategory(e.target.value)}
              required
            />
            <button className="btn btn-success form-control mt-3" type="submit">
              ADD
            </button>
          </form>
          {Record && <div className="text-success mt-3">{Record}</div>}
        </div>
      </div>
    </>
  );
}

export default AddProducts;
