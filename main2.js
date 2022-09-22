const base_url = "https://api.pexels.com/v1/search?query=";
const API_KEY = "563492ad6f91700001000001f2a52700620f44c6ace1b5680d51ff90";

const getRandomImgNum = (max) => {
    return Math.floor(Math.random() * max);
};

// Fetch
const getClothingItem = (clothingType, modifier, modifier2, location) => {
  fetch(`${base_url}${clothingType}+${modifier}+${modifier2}+outfit`, {
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
      const image = document.createElement('img')
      image.classList.add('clothing-item')
      const index = getRandomImgNum(data.photos.length);
      image.src = data.photos[index].src.portrait;
      location.appendChild(image)
    })
    .catch((err) => {
      throw "An error has occured";
    });
};

const button = document.getElementById("submitButton");
const refreshButton = document.getElementById("refresh-btn");
const form = document.getElementById("form");
const errorContainer = document.getElementById("error-message");
const body = document.getElementById("main-body");
const grid = document.getElementById('grid-container');


let shirtItem = document.getElementById('shirts')
let pantsItem = document.getElementById('pants')
let shoesItem = document.getElementById('shoes')
let accesoryItem = document.getElementById('bag')


button.addEventListener("click", (e) => {
  e.preventDefault();
  let selectedOutfitType = document.querySelector(
    'input[name="outfit-type"]:checked'
  )?.value;
  let selectedGender = document.querySelector(
    'input[name="gender-type"]:checked'
  )?.value;

//   error if all items arent checked or no item is checked.
  if (selectedOutfitType === undefined || selectedGender === undefined) {
    const p = document.createElement("img");
    const p2 = document.createElement("p");
    p2.innerText = "MUST CHOOSE AN OPTION!"
    p.src= 'https://c.tenor.com/GCqEawGCfeYAAAAj/sorry-please-try-again-crabby-crab.gif';
    errorContainer.appendChild(p);
    errorContainer.appendChild(p2);
  } else {
    errorContainer.innerHTML = "";
    body.innerHTML = "";
    grid.style.display = 'grid';

    // top item
    getClothingItem(selectedOutfitType, 'shirts',  selectedGender, shirtItem)
    // pants item
    getClothingItem(selectedOutfitType, 'pants', selectedGender, pantsItem)
    //shoes item
    getClothingItem(selectedOutfitType, 'shoes', selectedGender, shoesItem)
    //accesories item
    getClothingItem(selectedOutfitType, 'bag', selectedGender, accesoryItem)
  }
  console.log(selectedOutfitType, selectedGender);
});

refreshButton.addEventListener('click', (e) => {
    e.preventDefault();
    window.location.reload()
})


