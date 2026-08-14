const upperMenus = ["ABOUT", "SERVICES", "CASES", "TEAM"];
const upperMenuContainer = document.getElementById("upper-menu");

const upperMenuHTML = upperMenus
  .map((upperMenu) => `<div>${upperMenu}</div>`)
  .join("");
upperMenuContainer.insertAdjacentHTML("afterbegin", upperMenuHTML);

const bottomMenus = ["BOOST PROGRAM", "PRODUCTS", "BOOK", "BLOG"];
const bottomMenuContainer = document.getElementById("bottom-menu");

const bottomMenuHTML = bottomMenus
  .map((bottomMenu) => `<div>${bottomMenu}</div>`)
  .join("");
bottomMenuContainer.insertAdjacentHTML("afterbegin", bottomMenuHTML);

const footerMenus = ["About us", "Expertise", "Get started", "What we do"];

const footerMenuContainer = document.getElementById("footer-id");

const footerMenuHTML = footerMenus
  .map(
    (
      footerMenu,
    ) => `<div><div class="footer-menu-text">${footerMenu}</div> <img src="../images/ico_line_02.png" alt="White Line"></div> 
          
  `,
  )
  .join("");
footerMenuContainer.insertAdjacentHTML("afterbegin", footerMenuHTML);
