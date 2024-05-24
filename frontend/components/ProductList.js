"use client";

import { deleteProduct } from "@/api/api";
import { toast } from "sonner";

const ProductList = ({ products, fetchProducts, onEdit }) => {

  const handleDelete = async (id) => {
    try {
      await deleteProduct(id);
      fetchProducts();
      toast.info("Producto eliminado")
    } catch (error) {
      console.error("Error deleting product", error);
    }
  };

  return (
    <div className="items-center">
      <div className="flex items-center my-4">
        <div className="flex-1 border-t border-gray-300 dark:border-gray-600" />
        <span className="px-2 text-white font-extrabold text-xl font-mono dark:text-gray-400">PRODUCTOS</span>
        <div className="flex-1 border-t border-gray-300 dark:border-gray-600" />
      </div>
      <div className="overflow-y-auto max-h-96">
        <table className="w-full table-auto border-collapse text-left">
          <thead className="bg-gray-400 dark:bg-gray-900">
            <tr>
              <th className="px-4 py-3 font-extrabold text-xl font-mono text-gray-700 dark:text-gray-300">
                Id
              </th>
              <th className="px-4 py-3 font-extrabold text-xl font-mono text-gray-700 dark:text-gray-300">
                Producto
              </th>
              <th className="px-4 py-3 font-extrabold text-xl font-mono text-gray-700 dark:text-gray-300">
                Descripción
              </th>
              <th className="px-4 py-3 font-extrabold text-xl font-mono text-gray-700 dark:text-gray-300">
                Precio
              </th>
              <th className="px-4 py-3 font-extrabold text-xl font-mono text-gray-700 dark:text-gray-300">
                Cantidad
              </th>
              <th className="px-4 py-3 font-extrabold text-xl font-mono text-gray-700 dark:text-gray-300">
                Acciones
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-400 dark:divide-gray-700">
            {products.map((product) => (
              <tr key={product.id}>
                <td className="px-4 py-3 font-semibold text-lg font-mono text-gray-100 dark:text-gray-300">
                  {product.id}
                </td>
                <td className="px-4 py-3 font-semibold text-lg font-mono text-gray-100 dark:text-gray-300">
                  {product.nombre.length > 50 ? product.nombre.slice(0, 50) + '...' : product.nombre}
                </td>
                <td className="px-4 py-3 font-semibold text-lg font-mono text-gray-100 dark:text-gray-300 break-words" style={{ maxWidth: "280px", wordWrap: "break-word" }}>
                  {product.descripcion}
                </td>
                <td className="px-4 py-3 font-semibold text-lg font-mono text-gray-100 dark:text-gray-300">
                  {product.precio}
                </td>
                <td className="px-4 py-3 font-semibold text-lg font-mono text-gray-100 dark:text-gray-300">
                  {product.cantidad}
                </td>
                <td className="col-span-1 justify-center items-center px-4 py-3 font-semibold text-lg font-mono text-gray-100 dark:text-gray-300">
                  <button 
                    onClick={() => handleDelete(product.id)}
                    className="inline-flex items-center justify-center rounded-md bg-red-500 px-4 py-2 font-semibold text-sm font-mono text-gray-50 shadow transition-colors hover:bg-red-500/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                  >
                    Eliminar
                  </button>
                  <button 
                    onClick={() => onEdit(product)}
                    className="mt-3 inline-flex items-center justify-center rounded-md bg-green-500 px-4 py-2 font-semibold text-sm font-mono text-gray-50 shadow transition-colors hover:bg-green-500/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                  >
                    Editar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductList;
