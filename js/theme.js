(function () {
  const STORAGE_KEY = "collegeapp-theme";
  const themeSelect = document.getElementById("theme-select");

  const applyTheme = (value) => {
    if (!value || value === "default") {
      document.documentElement.removeAttribute("data-theme");
    } else {
      document.documentElement.setAttribute("data-theme", value);
    }
  };

  const saved = localStorage.getItem(STORAGE_KEY) || "default";
  applyTheme(saved);

  if (themeSelect) {
    themeSelect.value = saved;
    themeSelect.addEventListener("change", (event) => {
      const value = event.target.value;
      applyTheme(value);
      localStorage.setItem(STORAGE_KEY, value);
    });
  }
})();
