//Slider values
const slider_language = [100, 85];

//Link's ids for navegation
const nav_links = [
  "sobre-mi",
  "timeline",
  "habilidades",
  "portfolio",
  "contacto",
];

//Scroll to navigation bar when click in element.
function scrollToSidenav() {
  document.getElementById("nav-bar").scrollIntoView({ behavior: "smooth" });
}

//Close the sidenav
function handleNavBar() {
  const element = document.getElementsByClassName("sidebarjs--is-visible")[0];
  element.classList.remove("sidebarjs--is-visible");
}

//Open image modal
function openImgModal(event) {
  const src = event.target.srcset.split(",")[2].split(/\s/g)[1];
  document
    .getElementsByClassName("portfolio__modal-img")[0]
    .setAttribute("src", src);
  document
    .getElementsByClassName("portfolio__modal-img")[0]
    .setAttribute("alt", event.target.alt);
  document.getElementsByClassName("portfolio__modal")[0].style.display = "flex";
}

//Close image modal
function closeImgModal() {
  document.getElementsByClassName("portfolio__modal")[0].style.display = "none";
}

//Set slider values to its value from array (for the animation) when it enters in the viewport
const sliderViewport = (index, value) => {
  const observerSlider = new IntersectionObserver(
    function (entries) {
      if (entries[0].isIntersecting === true)
        document.getElementsByClassName("skills__slider-fill")[
          index
        ].style.width = `${value}%`;
    },
    { threshold: [1] }
  );

  observerSlider.observe(
    document.getElementsByClassName("skills__slider")[index]
  );
};

const setSliders = () =>
  slider_language.forEach((el, index) => sliderViewport(index, el));

setSliders();

//Change url while scrolling to match anchor when it is in viewport
const changeURLScroll = new IntersectionObserver(
  function (entries) {
    if (entries[0].isIntersecting === true) {
      history.pushState("", "", `#${entries[0].target.children[0].id}`);
    }
  },
  { threshold: [0.3] }
);

const setUrlNavLinks = () =>
  nav_links.forEach((el) =>
    changeURLScroll.observe(document.getElementById(el).parentElement)
  );

setUrlNavLinks();
