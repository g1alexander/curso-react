import PropTypes from "prop-types";

export function GifGridItem({ title, image }) {
  return (
    <div className="card animate__animated animate__bounce">
      <h3>{title}</h3>
      <img src={image} alt={title} />
    </div>
  );
}

GifGridItem.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};
