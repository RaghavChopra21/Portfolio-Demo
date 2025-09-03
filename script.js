// ===== Navbar Active Links on Scroll =====
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach(link => {
        link.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });

  // ===== Sticky Navbar =====
  let header = document.querySelector(".header");
  header.classList.toggle("sticky", window.scrollY > 100);

  // Close navbar on scroll (for mobile)
  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};

// ===== Mobile Menu Toggle =====
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x"); // Change icon to "X"
  navbar.classList.toggle("active"); // Toggle navbar open/close
};
