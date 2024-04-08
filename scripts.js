let sites = [
  {
    name: "Pro-Club",
    url: "https://shopproclub.com/ ",
    imgurl: "/img/proclub.png",
    description: "the essentials tees, socks, etc",
  },
  {
    name: "Seventh Earth",
    url: "https://7thearthstudios.com/ ",
    imgurl: "/img/blank.png",
    description: "Blank hoodies, sweats, and crewneck sweaters  ",
  },
  {
    name: "MoojiMooji",
    url: "https://moojimoojius.com/",
    imgurl: "/img/mooji.png",
    description:
      "Colorful sweats Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    name: "Momotaro Jeans",
    url: "https://momotaro-jeans.com/ ",
    imgurl: "/img/jeans.png",
    description: "A Japanese denim website I always lose",
  },
  {
    name: "Whitesville Loopwheel Tees",
    url: "https://redcastheritage.com/collections/whitesville/ ",
    imgurl: "/img/whitesville.png",
    description: "The T-shirt from The Bear",
  },
  {
    name: "Waffle sweats",
    url: "https://www.cottonnovas.com/products/heavyweight-knitted-cotton-waffle-sweatpant",
    imgurl: "/img/wafflesweats.png",
    description:
      "So interesting sweatpaints I found that ind never seen before",
  },
  {
    name: "Barriers",
    url: "https://barriersworldwide.com/",
    imgurl: "/img/barriers.png",
    description:
      "A brand heightlights Black historical figures and icons through clothing",
  },
  {
    name: "Radar Club",
    url: "http://Radarclothingclub.com/ ",
    imgurl: "/img/radar.webp",
    description: "Graphic tees, and hoodies",
  },
  {
    name: "Zara",
    url: "https://www.zara.com/us/en/origins-collection-l4661.html?v1=2297670&regionGroupId=13 ",
    imgurl: "/img/zara.png",
    description: "Zara but the good stuff Lorem ipsum dolor sit am",
  },
  {
    name: "Uniqlo",
    url: "https://www.uniqlo.com/us/en/contents/feature/masterpiece/ ",
    imgurl: "/img/uniqlo.png",
    description:
      "Uniqlo but where they hide the good stuff, mostly high quility essentials",
  },
  {
    name: "California-arts",
    url: "https://california-arts.com/",
    imgurl: "/img/caliart.png",
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
  navigation();

  cardsArray.forEach((site) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
          <h2>${site.name}</h2>
          <img
          src="${site.imgurl}"
          alt=""
        />
          <p style="padding: 20px;">${site.description}</p>
      `;
    card.onclick = function () {
      window.location.href = site.url;
    }; // Navigate on click
    cardContainer.appendChild(card);
  });
}

function navigation() {
  const footer = document.querySelector("footer");
  footer.style.display = "block";
}

function setCardSelection(buttonValue) {
  let cardSelection = "basic";
  cardSelection = buttonValue;
  if (cardSelection === "basic") {
    showCards(basic);
  } else if (cardSelection === "cool") {
    showCards(cool);
  } else if (cardSelection === "smartCasual") {
    showCards(smartCasual);
  }
}

function home() {
  window.location.href = "index.html";
}

function drawThree() {
  let shuffle = sites
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
  let draw = shuffle.slice(0, 3);
  showCards(draw);
}
