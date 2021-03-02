export const getGifs = async (categoria) => {
  const apiKey = 'DDG3hItPp5HIRNC0nit3AXOR7eCyQZAe';
  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
    categoria,
  )}&limit=10&api_key=${apiKey}`;
  const response = await fetch(url);
  // const { data, meta } = await response.json();
  const { data } = await response.json();

  const gifts = data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images?.downsized_medium.url,
  }));

  console.log(gifts);
  return gifts;
};
