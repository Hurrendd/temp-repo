export const loadPosts = async () => {
  const postsResponse = fetch('https://jsonplaceholder.typicode.com/posts');
  const photosResponse = fetch('https://jsonplaceholder.typicode.com/photos');

  const [postsx, photos] = await Promise.all([postsResponse, photosResponse]);

  const postsJson = await postsx.json();
  const photosJson = await photos.json();

  const postsAndphotos = postsJson.map((post, index) => {
    // console.log(`${index}`, photosJson[index].url);
    return { ...post, cover: photosJson[index].url };
  });

  return postsAndphotos;
}