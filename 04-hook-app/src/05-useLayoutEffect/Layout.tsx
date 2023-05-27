import { useCounter, useFetch } from "../hooks";
import { LoadingQuote, Quote } from "../03-examples";

interface Data {
  quote: string;
  author: string;
}

export default function Layout() {
  const { counter, increment } = useCounter(1);

  const { data, isLoading } = useFetch<Data[]>(
    `https://api.breakingbadquotes.xyz/v1/quotes/${counter}`
  );

  const { author, quote } = data?.[0] ?? { author: "", quote: "" };

  return (
    <>
      {isLoading ? <LoadingQuote /> : <Quote {...{ author, quote }} />}

      <button disabled={isLoading} onClick={() => increment(1)}>
        hi
      </button>
    </>
  );
}
