import { memo } from "react";

interface ShowIncrementProps {
  increment: (payload: number) => void;
}

// export default function ShowIncrement({ increment }: ShowIncrementProps) {
//   console.log("Me volví a generar :(");
//   return <button onClick={() => increment()}>Increment</button>;
// }

const ShowIncrement = memo(({ increment }: ShowIncrementProps) => {
  console.log("Me volví a generar :(");
  return <button onClick={() => increment(5)}>Increment</button>;
});

export default ShowIncrement;
