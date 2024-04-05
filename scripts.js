/**
 * Data Catalog Project Starter Code - SEA Stage 2
 *
 * This file is where you should be doing most of your work. You should
 * also make changes to the HTML and CSS files, but we want you to prioritize
 * demonstrating your understanding of data structures, and you'll do that
 * with the JavaScript code you write in this file.
 *
 * The comments in this file are only to help you learn how the starter code
 * works. The instructions for the project are in the README. That said, here
 * are the three things you should do first to learn about the starter code:
 * - 1 - Change something small in index.html or style.css, then reload your
 *    browser and make sure you can see that change.
 * - 2 - On your browser, right click anywhere on the page and select
 *    "Inspect" to open the browser developer tools. Then, go to the "console"
 *    tab in the new window that opened up. This console is where you will see
 *    JavaScript errors and logs, which is extremely helpful for debugging.
 *    (These instructions assume you're using Chrome, opening developer tools
 *    may be different on other browsers. We suggest using Chrome.)
 * - 3 - Add another string to the names array a few lines down. Reload your
 *    browser and observe what happens. You should see a fourth "card" appear
 *    with the string you added to the array, but a broken image.
 *
 */

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

//

// This function adds cards the page to display the data in the array
function showCards() {
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = "";
  const templateCard = document.querySelector(".card");

  for (let i = 0; i < sites.length; i++) {
    let name = sites[i].name;
    let description = sites.map((sites) => sites.description);
    let img = sites.map((sites) => sites.img);

    const nextCard = templateCard.cloneNode(true); // Copy the template card
    editCardContent(nextCard, name, img, description); // Edit name and image
    cardContainer.appendChild(nextCard); // Add new card to the container
  }
}

function editCardContent(card, newName, newImg, newDescription) {
  card.style.display = "block";

  const cardHeader = card.querySelector("h2");
  cardHeader.textContent = newName;

  // add images
  const cardImage = card.querySelector("img");
  cardImage.src = newImg;
  cardImage.alt = newName + " Poster";

  const cardList = card.querySelector("ul");
  cardList.value = newDescription;
  let cardDesc = cardList.value;
  cardDesc.forEach((obj) => {
    const li = document.createElement("li");
    li.textContent = obj;
    cardList.appendChild(li);
  });
}

// This calls the addCards() function when the page is first loaded
document.addEventListener("DOMContentLoaded", showCards);

function quoteAlert() {
  console.log("Button Clicked!");
  alert(
    "I guess I can kiss heaven goodbye, because it got to be a sin to look this good!"
  );
}

function removeLastCard() {
  names.pop(); // Remove last item in names array
  showCards(); // Call showCards again to refresh
}
