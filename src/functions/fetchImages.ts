export default async function fetchImages({ pageParam = 1 }) {
    return {
      response: await fetch(`https://picsum.photos/v2/list?page=${pageParam}&limit=20`),
      pageParam: pageParam + 1
    };
}