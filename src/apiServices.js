export const getPhotos = async (album, limit) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/albums/${album}/photos?_limit=${limit}`
  );
  return await response.json();
  
};