import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { collection, getDocs, addDoc } from "firebase/firestore";
import { db } from '../../services/firebase/config';

const Products = () => {
  const [products, setProducts] = useState([]);

  const {register, handleSubmit} = useForm();

  const getProducts = async () => {
    const querySnapshot = await getDocs(collection(db, "products"));
    console.log(querySnapshot.docs.map((doc) => {console.log(doc.data())}));
    

    const data = querySnapshot.docs.map( (docs) => ({
        id: docs.id,
        ...docs.data()
    }));
  
    setProducts(data);
    };
    const addproduct = async (data) => {

      console.log(data.name);
      const docRef = await addDoc(collection(db, "products"), {
        name: data.name,
        price: parseFloat(data.price),
        stock: parseInt(data.stock),
        
      });
      console.log("Document written with ID: ", docRef.id);
      getProducts();
    };

useEffect(() => {
    getProducts();
}, []);

return (
    <div className="container mt-4">
      <h2>Product Form</h2>
      <form onSubmit={handleSubmit(addproduct)} className="mb-4">
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            {...register("name")}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="price" className="form-label">Price</label>
          <input
            type="text"
            className="form-control"
            id="price"
            name="price"
            {...register("price")}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="stock" className="form-label">Stock</label>
          <input
            type="text"
            className="form-control"
            id="stock"
            name="stock"
            {...register("stock")}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Add Product</button>
      </form>

      <h3>Product List</h3>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Stock</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index}>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.stock}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};  

export default Products;
