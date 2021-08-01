(() => {
  const root = document.documentElement;
  if (localStorage.cyh_theme) {
    root.classList.add(localStorage.cyh_theme);
  }
})();
