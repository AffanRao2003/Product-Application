import { useEffect, useState } from "react";
import { getProducts, deleteProduct } from "../api/productsApi";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadProducts = async () => {
    const data = await getProducts();
    setProducts(data);
    setLoading(false);
  };

  const handleDelete = async (id) => {
    if (confirm("Delete product?")) {
      await deleteProduct(id);
      loadProducts();
    }
  };

  useEffect(() => {
    loadProducts();
  }, []);

  if (loading) return <p className="p-4">Loading...</p>;

  return (
    <>
      <Navbar />
      <div className="p-4">
        <Link to="/products/add" className="bg-green-500 text-white px-3 py-1 rounded">
          Add Product
        </Link>

        <table className="w-full mt-4 border">
          <thead>
            <tr className="bg-gray-200">
              <th>Name</th>
              <th>Image</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products?.map(p => (
              <tr key={p.id} className="border">
                <td>{p.title}</td>
                <td className="text-center p-4">
                  <img
                    src={p.images?.[0]}
                    alt={p.title}
                    className="w-24 h-24 object-cover mx-auto rounded"
                  />
                </td>
                <td className="text-center">${p.price}</td>
                <td className="space-x-4 text-center">
                  <Link to={`/products/${p.id}`} className="text-blue-600">View</Link>
                  <Link to={`/products/edit/${p.id}`} className="text-yellow-600">Edit</Link>
                  <button onClick={() => handleDelete(p.id)} className="text-red-600">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Products;
