const apiKey = "9pz3h3ta7uGNedW8NC3Be57G3tic3RnQ";

const initialSearchTerm = "cats";

const fetchGifs = (e) => {
  e.preventDefault();
  const searchTerm = document.getElementById("gif-search-term").value;
  removeExistingGifs();
  fetchGifsBySearchTerm(searchTerm);
};

const removeExistingGifs = () => {
  const giphySection = document.getElementsByClassName("giphy-container")[0];
  while (giphySection.firstChild) {
    giphySection.removeChild(giphySection.lastChild);
  }
};

const fetchGifsBySearchTerm = (searchTerm) => {
  fetch(
    `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${searchTerm}&limit=10`
  )
    .then((response) => response.json())
    .then((json) => {
      json.data
        .map((gif) => gif.images.fixed_height.url)
        .forEach((url) => {
          const giphySection =
            document.getElementsByClassName("giphy-container")[0];
          const img = document.createElement("img");
          img.src = url;
          img.className = "giphy";
          giphySection.appendChild(img);
        });
    })
    .catch((error) => console.log(error));
};

fetchGifsBySearchTerm(initialSearchTerm);
document.getElementById("gif-search-term").focus();
document.getElementById("gif-search-term").value = initialSearchTerm;
