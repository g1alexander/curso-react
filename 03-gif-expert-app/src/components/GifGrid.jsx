import PropTypes from "prop-types";
import { GifGridItem } from "./GifGridItem";
import { useFetchGif } from "../hooks/useFetchGif";

export function GifGrid({ category }) {
  const { data: images, loading } = useFetchGif(category);

  return (
    <>
      <h2>{category}</h2>

      {loading && (
        <p className="animate__animated animate__flash">cargando...</p>
      )}

      <section className="grid">
        {images.map((img) => (
          <GifGridItem key={img.id} {...img} />
        ))}
      </section>
    </>
  );
}

GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
};
