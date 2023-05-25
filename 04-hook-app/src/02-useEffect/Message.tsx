import { useEffect, useState } from "react";

interface Coords {
  x: number;
  y: number;
}

export default function Message() {
  const [coords, setCoords] = useState<Coords>({ x: 0, y: 0 });

  useEffect(() => {
    const onMouseMove = ({ x, y }: MouseEvent) => {
      // const coors = { x, y };
      setCoords({ x, y });
    };

    window.addEventListener("mousemove", onMouseMove);

    return () => {
      // evitar fugas de memoria

      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <>
      <div>usuario existe</div>
      {JSON.stringify(coords)}
    </>
  );
}
