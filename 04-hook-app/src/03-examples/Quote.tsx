interface Props {
  quote: string;
  author: string;
}

export default function Quote({ author, quote }: Props) {
  return (
    <div>
      <p>{quote}</p>
      <p>{author}</p>
    </div>
  );
}
