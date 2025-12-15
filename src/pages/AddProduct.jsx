import { useState } from "react";
import { addProduct } from "../api/productsApi";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const navigate = useNavigate();

  const submit = async () => {
    await addProduct({
      title,
      price: Number(price),
      description: "New product",
      categoryId: 1,
      images: ["https://placeimg.com/640/480/any"]
    });
    navigate("/products");
  };

  return (
    <div className="p-4">
      <input className="border p-2 block mb-2" placeholder="Title" onChange={e => setTitle(e.target.value)} />
      <input className="border p-2 block mb-2" placeholder="Price" onChange={e => setPrice(e.target.value)} />
      <button onClick={submit} className="bg-blue-600 text-white px-4 py-2 rounded">
        Add
      </button>
    </div>
  );
};

export default AddProduct;
