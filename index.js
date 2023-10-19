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


document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#searchForm");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const searchTerm = e.target.elements.query.value;
    if (searchTerm) {
      try {
        const shows = await fetchShows(searchTerm);
        displayShows(shows);
      } catch (err) {
        console.error("Error fetching shows:", err);
        console.log("oh nooo");
        // Optionally display an error message to the user
      }
      e.target.elements.query.value = "";
    }
  });
});

const fetchShows = async (query) => {
  const res = await axios.get("https://api.tvmaze.com/search/shows", {
    params: { q: query },
  });
  return res.data;
};

const displayShows = (shows) => {
  const imageContainer = document.querySelector("#imageContainer");
  imageContainer.innerHTML = "";

  for (let {
    show: { image },
  } of shows) {
    if (image && image.medium) {
      const img = document.createElement("IMG");
      img.src = image.medium;
      imageContainer.append(img);
    }
  }
};

