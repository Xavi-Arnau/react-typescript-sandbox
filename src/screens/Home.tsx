import axios from "axios";
import { useEffect, useState } from "react";
import { Product } from "../types/product";

const Home = () => {
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("https://dummyjson.com/products");
        //console.log(response.data.products);
        setProducts(response.data.products);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);
  return (
    <div className="mt-20 p-8">
      <h1 className="text-5xl p-4">React Typescript Sandbox</h1>
      <p className="italic p-4">Let's play!</p>
      <div className="flex flex-row flex-wrap">
        {products.map((product) => (
          <div
            className="flex flex-col w-1/5 p-4 justify-center items-center"
            key={product.title}
          >
            <div className="">
              <img
                className="object-cover h-48 w-48"
                src={product.images[0]}
                alt=""
              />
            </div>
            <div>{product.title}</div>
            <div></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
