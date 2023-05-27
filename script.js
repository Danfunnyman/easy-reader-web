document.addEventListener("DOMContentLoaded", function() {
  // Smooth scrolling when clicking on navigation links
  const navLinks = document.querySelectorAll("nav.navbar a");

  for (const link of navLinks) {
    link.addEventListener("click", smoothScroll);
  }

  function smoothScroll(event) {
    event.preventDefault();
    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);
    const targetPosition = targetElement.offsetTop;

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth"
    });
  }
});
