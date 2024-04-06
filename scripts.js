let sites = [
  {
    name: "Pro-Club",
    url: "https://shopproclub.com/ ",
    description: "the essentials tees, socks, etc",
  },
  {
    name: "Seventh Earth",
    url: "https://7thearthstudios.com/ ",
    description: "Blank hoodies, sweats, and crewneck sweaters  ",
  },
  {
    name: "MoojiMooji",
    url: "https://moojimoojius.com/",
    description: "Colorful sweats",
  },
  {
    name: "Radar Club",
    url: "http://Radarclothingclub.com/ ",
    description: "Graphic tees, and hoodies",
  },
  {
    name: "Whitesville Loopwheel Tees",
    url: "https://redcastheritage.com/collections/whitesville/ ",
    description: "The T-shirt from The Bear",
  },
  {
    name: "Waffle sweats",
    url: "https://www.cottonnovas.com/products/heavyweight-knitted-cotton-waffle-sweatpant",
    description:
      "So interesting sweatpaints I found that ind never seen before",
  },
  {
    name: "Barrier",
    url: "https://barriersworldwide.com/",
    description:
      "A brand heightlights Black historical figures and icons through clothing",
  },
  {
    name: "Momotaro Jeans",
    url: "https://momotaro-jeans.com/ ",
    description: "A Japanese denim website I always lose",
  },
  {
    name: "Zara",
    url: "https://www.zara.com/us/en/origins-collection-l4661.html?v1=2297670&regionGroupId=13 ",
    description: "Zara but the good stuff",
  },
  {
    name: "Uniqlo",
    url: "https://www.uniqlo.com/us/en/contents/feature/masterpiece/ ",
    description: "Uniqlo but the good stuff",
  },
  {
    name: "California-arts",
    url: "https://california-arts.com/",
    description: "A minimalist brand focused on craftmenship and quility",
  },
];

// proclub, luxary blanks, moojimoojius
let basic = sites.slice(0, 4);

//the bear t-shirt, waffle sweats, radar
let cool = sites.slice(4, 8);

// zara the good stuff uniqlo the good stuff, california arts
let smartCasual = sites.slice(8, 11);

function showCards(cardsArray) {
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = ""; // Clear existing content

  cardsArray.forEach((site) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
          <h2>${site.name}</h2>
          <p>${site.description}</p>
      `;
    card.onclick = function () {
      window.location.href = site.url;
    }; // Navigate on click
    cardContainer.appendChild(card);
  });
}

// Call the function with the 'basic' array to show cards on load
document.addEventListener("DOMContentLoaded", function () {
  showCards(sites);
});

let cardSelection = document.getElementById("selection");

function quoteAlert() {
  console.log("Button Clicked!");
  alert(
    "I guess I can kiss heaven goodbye, because it got to be a sin to look this good!"
  );
}

function removeLastCard() {
  sites.pop(); // Remove last item in names array
  showCards(); // Call showCards again to refresh
}
