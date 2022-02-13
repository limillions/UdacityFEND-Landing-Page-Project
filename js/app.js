/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * Define Global Variables
 *
 */
let ulNav = document.getElementById("navbar__list");
let ulFragment = new DocumentFragment();
let allSections = document.querySelectorAll("section");
let icn = document.querySelector(".icon");
let dropDown = document.querySelector(".navbar__menu");

/**
 * End Global Variables
 


 * Begin Main Functions and Events
 *
 */

// build the nav
// Build menu dynamically

allSections.forEach(function (ele, idx, arr) {
  let liItem = document.createElement("li");
  let anchorItem = document.createElement("a");
  let anchorText = ele.getAttribute("data-nav");
  let hrefValue = ele.id;
  anchorItem.textContent = anchorText;
  anchorItem.setAttribute("href", `#${hrefValue}`);
  anchorItem.classList.add("menu__link");
  liItem.appendChild(anchorItem);
  ulFragment.appendChild(liItem);
});

ulNav.appendChild(ulFragment);

//Define Lists Variable
let allAnchors = document.querySelectorAll("a");

// Add class 'active' to section when near top of viewport
// Set sections as active

allSections.forEach(function (ele, idx, arr) {
  window.addEventListener("scroll", function (sclEvt) {
    if (
      ele.getBoundingClientRect().top >= 0 &&
      ele.getBoundingClientRect().top <= 250
    ) {
      allSections.forEach((elem) => {
        elem.classList.remove("your-active-class");
      });
      // Set anchors in navbar as active (highlighted)
      allAnchors.forEach((el) => {
        el.classList.remove("active__link");
        if (ele.id === el.getAttribute("href").slice(1)) {
          el.classList.add("active__link");
        }
      });
      ele.classList.add("your-active-class");
    }
  });
});

// Scroll to anchor ID using scrollTO event
// Scroll to section on link click

allAnchors.forEach((ele) => {
  ele.addEventListener("click", function (eve) {
    eve.preventDefault();
    allSections.forEach((elm) => {
      if (elm.id === ele.getAttribute("href").slice(1)) {
        elm.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });
});

/**
 * End Main Functions and Events

/*
 * Begin Responsive NavBar
 */

// Event method for responsive menu button used in hiding menu

icn.addEventListener("click", function (e) {
  if (icn.textContent === `\u2632`) {
    icn.textContent = `\u26CC`;
    icn.style = `color: black;`;
    dropDown.classList.remove("navbar__menuNone");
  } else {
    icn.textContent = `\u2632`;
    icn.style = `color: white;`;
    dropDown.classList.add("navbar__menuNone");
  }
});

/*
 * End Responsive NavBar
 */
