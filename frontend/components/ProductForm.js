"use client";

import { useState, useEffect } from "react";
import { createProduct, updateProduct } from "@/api/api";
import { toast } from "sonner";

const ProductForm = ({ product, refetch, onCancel }) => {
  const [id, setId] = useState(null);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);


  //We gonna show a new form if no existing product, else we display current values before editing
  useEffect(() => {
    if (product) {
      setName(product.nombre || '');
      setDescription(product.descripcion || '');
      setPrice(product.precio || 0);
      setQuantity(product.cantidad || 0);
    }
  }, [product]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {
      nombre: name,
      descripcion: description,
      precio: price,
      cantidad: quantity,
    };

    try {
      if (product && product.id) {
        await updateProduct(product.id, data);
      } else {
        await createProduct(data);
      }

      refetch();
      resetForm();
      toast.success("Producto actualizado.")
      onCancel();

    } catch (error) {
      console.error("Error saving product", error);
    }
  };

  const resetForm = () => {
    setName('');
    setDescription('');
    setPrice(0);
    setQuantity(0);
    setId(null);
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-black">Añadir/Editar Producto</h2>
      <p className="text-gray-500 mb-6">Llena/edita el siguiente formulario para añadir nuevos productos.</p>
      <form onSubmit={handleSubmit} className="space-y-4 text-black">
        <div>
          <label className="block text-gray-700 font-medium mb-2" htmlFor="name">
            Nombre
          </label>
          <input
            className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:ring focus:border-blue-500"
            id="name"
            placeholder="Nombre de producto"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-2" htmlFor="description">
            Descripción
          </label>
          <textarea
            className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:ring focus:border-blue-500"
            id="description"
            placeholder="Descripción del producto"
            rows={3}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-2" htmlFor="price">
            Precio
          </label>
          <input
            className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:ring focus:border-blue-500"
            id="price"
            
            type="text"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-2" htmlFor="quantity">
            Cantidad
          </label>
          <input
            className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:ring focus:border-blue-500"
            id="quantity"
            type="number"
            min={0}
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
        </div>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md" type="submit">
          {product && product.id ? "Editar" : "Guardar"}
        </button>
        <button 
          className="ml-3 bg-gray-300 hover:bg-gray-400 text-gray-700 font-medium py-2 px-4 rounded-md" 
          type="button" 
          onClick={onCancel}>
          Cancelar
        </button>
      </form>
    </div>
  );
};

export default ProductForm;