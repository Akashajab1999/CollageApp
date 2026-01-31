(function () {
  const nav = document.querySelector(".site-nav");
  const toggle = document.querySelector(".nav-toggle");

  if (!nav || !toggle) return;

  const setState = (isOpen) => {
    nav.classList.toggle("open", isOpen);
    toggle.setAttribute("aria-expanded", String(isOpen));
  };

  const onToggle = () => {
    const isOpen = nav.classList.contains("open");
    setState(!isOpen);
  };

  toggle.addEventListener("click", onToggle);
  toggle.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      onToggle();
    }
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => setState(false));
  });
})();
