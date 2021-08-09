const apiKey = "9pz3h3ta7uGNedW8NC3Be57G3tic3RnQ";

fetch(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=cats&limit=10`)
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
  .catch((error) => (document.body.appendChild = error));
