import { memo } from "react";

interface Props {
  counter: number;
}

const Small = memo(({ counter }: Props) => {
  console.log("hi");
  return <div>{counter}</div>;
});

export default Small;
// export default function Small({ counter }: Props) {
//   console.log("hi");
//   return <div>{counter}</div>;
// }
