import { useEffect, useState } from "react";
import { getProductById, updateProduct } from "../api/productsApi";
import { useNavigate, useParams } from "react-router-dom";

const EditProduct = () => {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    getProductById(id).then(p => setTitle(p.title));
  }, [id]);

  const submit = async () => {
    await updateProduct(id, { title });
    navigate("/products");
  };

  return (
    <div className="p-4">
      <input className="border p-2 block mb-2" value={title} onChange={e => setTitle(e.target.value)} />
      <button onClick={submit} className="bg-yellow-500 px-4 py-2 rounded">
        Update
      </button>
    </div>
  );
};

export default EditProduct;
