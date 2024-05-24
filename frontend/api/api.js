import axios from "axios";

const api = axios.create({
    baseURL: 'http://localhost:8000/api' //Esto deberia ir cifrado en un .env pero se requiere listo para montar
});

export const getProducts = async () => {
    try {
        const response = await api.get('/productos/');
        return response.data;
    } catch (error) {
        console.error("Error fetching products", error);
        throw error;
    }
};

export const createProduct = async (productData) => {
    try {
        const response = await api.post('/productos/', productData);
        return response.data;
    } catch (error) {
        console.error("Error creating product", error);
        throw error;
    }
};

export const updateProduct = async (id, productData) => {
    try {
        const response = await api.put(`/productos/${id}/`, productData);
        return response.data;
    } catch (error) {
        console.error("Error updating product", error);
        throw error;
    }
};

export const deleteProduct = async (id) => {
    try {
        await api.delete(`/productos/${id}/`);
    } catch (error) {
        console.error("Error deleting product", error);
        throw error;
    }
};

export default api;
