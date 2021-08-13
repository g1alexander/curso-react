export async function getGifApi(category) {
  const api = `http://api.giphy.com/v1/gifs/search?q=${encodeURI(
    category
  )}&limit=10&api_key=NP5cQV4cSEAzBTGF0UJooDCwFcYASGyH`;

  const response = await fetch(api);
  const { data } = await response.json();

  const gifs = data.map(({ id, images, title }) => {
    return {
      id,
      image: images?.downsized_medium.url,
      title,
    };
  });

  return gifs;
}
