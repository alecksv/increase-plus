function burgerMenu(sel, sel2) {
  let menu = document.querySelector(sel);
  let burger = document.querySelector(sel2);
  let button = document.querySelector(".main-container__burger");
  let link = document.querySelector(".link-side");
  let body = document.getElementsByTagName("body");
  console.log(menu);
  console.log(body);

  button.addEventListener("click", () => {
    toggleMenu();
  });

  link.addEventListener("click", () => {
    toggleMenu();
  });

  function toggleMenu() {
    menu.classList.toggle("burger_active");
    burger.classList.toggle("burger_active");

    if (
      menu.classList.contains("burger_active") ||
      burger.classList.contains("burger_active")
    ) {
      body.style = "overflow: hidden";
    } else {
      body.style = "overflow: visible";
    }
  }
}
burgerMenu(".main-container__side-bar_visible", ".main-container__burger");
