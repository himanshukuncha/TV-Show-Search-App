// const form = document.querySelector("#searchForm");
// form.addEventListener("submit", async function (e) {
//   e.preventDefault();
//   //   console.log(form.elements.query.value);
//   const searchTerm = form.elements.query.value;
//   const config = { params: { q: searchTerm } };
//   const res = await axios.get(`https://api.tvmaze.com/search/shows?`, config);
//   //   const res = await axios.get(`https://api.tvmaze.com/search/shows?q=${searchTerm}`);
//   makeImages(res.data);
//   form.elements.query.value = "";
  
// });

// const makeImages = (shows) => {
//   for (let result of shows) {
//     if (result.show.image) {
//       const img = document.createElement("IMG");
//       img.src = result.show.image.medium;
//       document.body.append(img);
//     }
//   }
// };


const form = document.querySelector("#searchForm");
const imageContainer = document.querySelector("#imageContainer"); // grab the container

form.addEventListener("submit", async function (e) {
  e.preventDefault();
  const searchTerm = form.elements.query.value;
  const config = { params: { q: searchTerm } };
  const res = await axios.get(`https://api.tvmaze.com/search/shows?`, config);

  // Clear existing images
  imageContainer.innerHTML = "";

  makeImages(res.data);
  form.elements.query.value = "";
});

const makeImages = (shows) => {
  for (let result of shows) {
    if (result.show.image) {
      const img = document.createElement("IMG");
      img.src = result.show.image.medium;
      imageContainer.append(img); // append images to the container
    }
  }
};
