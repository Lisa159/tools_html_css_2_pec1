/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';

/**
 * Write any other JavaScript below
 */

function scrollToSidenav() {
  document.getElementById("nav-bar").scrollIntoView({ behavior: "smooth" });
}

function handleNavBar() {
  const element = document.getElementsByClassName("sidebarjs--is-visible")[0];
  element.classList.remove("sidebarjs--is-visible");
}

const slider_viewport = (index, value) => {
  const observer_slider = new IntersectionObserver(
    function (entries) {
      if (entries[0].isIntersecting === true)
        document.getElementsByClassName("skills__slider-fill")[
          index
        ].style.width = `${value}%`;
    },
    { threshold: [1] }
  );

  observer_slider.observe(
    document.getElementsByClassName("skills__slider")[index]
  );
};

slider_viewport(0, 100);
slider_viewport(1, 85);
