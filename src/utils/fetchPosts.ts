export async function getPosts() {
  const res = await fetch("https://tsnlombok.org//wp-json/wp/v2/posts");
  const data = await res.json();
  return data;
}
