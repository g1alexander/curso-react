import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export function GifExpertApp({ defaultCategories = [] }) {
  const [categories, setCategories] = useState(defaultCategories);

  // const handleAdd = () => {
  //   setCategories([...categories, "five"]);
  //    setCategories(cat => [...cat, "five"]);
  // };

  return (
    <>
      <h1>GifExpertApp</h1>
      <hr />

      <AddCategory setCategories={setCategories} />

      {/* <button onClick={handleAdd}>Agregar</button> */}
      <ol>
        {categories.map((category) => (
          <GifGrid category={category} key={category} />
        ))}
      </ol>
    </>
  );
}
