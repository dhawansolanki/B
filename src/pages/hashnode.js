const query = `
{
  user(username:"YuriCodesBot") {
    publication {
      posts {
        title
        brief
        slug
        cuid
      }
    }
  }
}`;
async function getData() {
  const response = await fetch("https://api.hashnode.com", {
    method: "post",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ query: query })
  });
  const body = await response.json();
  let html = "";
  body.data.user.publication.posts.forEach((post) => {
    html += `<li>${post.title}</li>`;
  });
  html = `<ul>${html}</ul>`;
  
}

getData();

export default query