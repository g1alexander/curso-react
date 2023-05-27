import { useLayoutEffect, useRef, useState } from "react";

interface Props {
  quote: string;
  author: string;
}

interface BoxSize {
  width: number;
  height: number;
}

export default function Quote({ author, quote }: Props) {
  const pRef = useRef<HTMLParagraphElement>(null);

  const [boxSize, setBoxSize] = useState<BoxSize>({ width: 0, height: 0 });

  useLayoutEffect(() => {
    if (!pRef.current) return;

    const { width, height } = pRef.current.getBoundingClientRect();

    setBoxSize({ width, height });
  }, [quote]);

  return (
    <div>
      <p ref={pRef}>{quote}</p>
      <p>{author}</p>

      <pre>{JSON.stringify(boxSize)}</pre>
    </div>
  );
}
