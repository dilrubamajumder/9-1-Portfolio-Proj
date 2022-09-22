// API URL & API_Key
const base_url = "https://api.pexels.com/v1/search?query=";
const API_KEY = "563492ad6f91700001000001f2a52700620f44c6ace1b5680d51ff90";

// Fetch
const getClothingItem = (clothingType, modifier1, modifier2) => {
  fetch(`${base_url}${clothingType}+${modifier1}+${modifier2}`, {
    method: "GET",
    headers: {
      Authorization: API_KEY,
    },
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    })
    .catch((err) => {
      throw "An error has occured";
    });
};

// Calls on API for random images on home page, when refreshed


// getting image on the Home page
const homeImageDiv = document.querySelector("#homepage-img");

// event listener
window.addEventListener("load", (e) => {
  e.preventDefault();
  const imG = document.createElement("img");
  //   add a class for css
  imG.classList.add("homeImg");

  imG.src =
    "https://cdn.dribbble.com/users/4680653/screenshots/10618006/dribbble_ksusha.gif";

  //   append imG into the homeImgageDiv
  homeImageDiv.appendChild(imG);
});
