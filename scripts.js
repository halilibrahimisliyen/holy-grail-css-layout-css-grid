function toggleNav() {
  const outerGrid = document.querySelector(".outer-grid");
  const nav = document.querySelector("nav");

  outerGrid.classList.toggle("outer-grid-expanded");
  nav.classList.toggle("hide-nav");
}
