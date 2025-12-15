import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProductById } from "../api/productsApi";
import Navbar from "../components/Navbar";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    getProductById(id).then(setProduct);
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <>
      <Navbar />
      <div className="p-4">
        <h2 className="text-xl font-bold">{product.title}</h2>
        <div className="text-center p-4">
        <img
          src={product.images?.[0]}
          alt={product.title}
          className="w-24 h-24 object-cover rounded"
        />
      </div>
        <p>{product.description}</p>
        <p className="font-semibold">${product.price}</p>
      </div>
    </>
  );
};

export default ProductDetails;
