import { useState } from "react";

export function GifExpertApp() {
  const [categories, setCategories] = useState(["one", "two", "three", "four"]);

  const handleAdd = () => {
    setCategories([...categories, "five"]);
  };

  return (
    <>
      <h1>GifExpertApp</h1>
      <hr />

      <button onClick={handleAdd}>Agregar</button>
      <ol>
        {categories.map((category) => (
          <li key={category}>{category}</li>
        ))}
      </ol>
    </>
  );
}
