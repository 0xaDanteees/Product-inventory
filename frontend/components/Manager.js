"use client";

import { useState, useEffect } from "react";
import ProductForm from "./ProductForm";
import ProductList from "./ProductList";
import { getProducts } from "@/api/api";


const Manager = () => {
  const [products, setProducts] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);

  const getAllProducts = async () => {
    try {
      const data = await getProducts();
      setProducts(data);
    } catch (error) {
      console.error("Can't get products", error);
    }
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  const handleEdit = (product) => {
    setEditingProduct(product);
    setShowForm(true);
  };

  return (
    <div>
      <button
        onClick={toggleForm}
        className={`inline-flex items-center justify-center rounded-md ${
          showForm ? "bg-red-400" : "bg-green-400"
        } px-4 py-2 font-semibold text-sm font-mono text-black shadow transition-colors hover:bg-green-400/80 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300`}
      >
        {showForm ? "Cerrar X" : "Añadir Producto"}
      </button>
      {showForm && (
        <ProductForm
          product={editingProduct}
          refetch={getAllProducts}
          onCancel={() => {
            setShowForm(false);
            setEditingProduct(null);
          }}
        />
      )}
      <ProductList products={products} fetchProducts={getAllProducts} onEdit={handleEdit} />
    </div>
  );
};

export default Manager;
