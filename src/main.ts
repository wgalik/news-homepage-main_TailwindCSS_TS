import "./style.css";

const hamburgerBtn = document.getElementById(
  "hamburger-btn",
) as HTMLButtonElement;
const header = document.querySelector("header") as HTMLElement;
const mainMenu = document.querySelector("#main-menu") as HTMLElement;
const menuLink = document.querySelectorAll(".menu-link");
const openMenuButtonClass = [
  "w-7",
  "h-7",
  "bg-[url('../assets/images/icon-menu-close.svg')]",
];
const smBreakpoint = window.matchMedia("(min-width: 40rem)");

let isMenuOpen = false;

const openMenu = () => {
  if (isMenuOpen) return closeMenu();

  hamburgerBtn.classList.add(...openMenuButtonClass);
  hamburgerBtn.setAttribute("aria-expanded", "true");
  mainMenu.classList.add("right-0");
  document.body.classList.add("bg-(--grayishBlue)");
  header.classList.add("bg-(--grayishBlue)");
  isMenuOpen = !isMenuOpen;
};

const closeMenu = () => {
  if (!isMenuOpen) return;
  hamburgerBtn.classList.remove(...openMenuButtonClass);
  hamburgerBtn.setAttribute("aria-expanded", "false");
  mainMenu.classList.remove("right-0");
  document.body.classList.remove("bg-(--grayishBlue)");
  header.classList.remove("bg-(--grayishBlue)");
  isMenuOpen = !isMenuOpen;
};

hamburgerBtn.addEventListener("click", openMenu);

menuLink.forEach((link) => link.addEventListener("click", closeMenu));

smBreakpoint.addEventListener("change", (event) => {
  if (event.matches) closeMenu();
});
