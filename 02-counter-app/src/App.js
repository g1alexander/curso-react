import PropTypes from "prop-types";

export function App({ saludo, subtitulo }) {
  return (
    <>
      <h1>{saludo}</h1>
      <p>{subtitulo}</p>
    </>
  );
}

App.propTypes = {
  saludo: PropTypes.string.isRequired,
};

App.defaultProps = {
  subtitulo: "Soy subtitulo",
};
