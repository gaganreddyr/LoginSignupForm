import { useState, useEffect } from "react";

const Theme = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
  const params = new URLSearchParams(window.location.search);
  const urlTheme = params.get("theme");

  const savedTheme = localStorage.getItem("theme");

  if (urlTheme === "light" || urlTheme === "dark") {
    setTheme(urlTheme);
  } else if (savedTheme) {
    setTheme(savedTheme);
  }
}, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => {
      const newTheme = prev === "light" ? "dark" : "light";

      const params = new URLSearchParams(window.location.search);
      params.set("theme", newTheme);

      const newUrl = `${window.location.pathname}?${params.toString()}`;
      window.history.replaceState({}, "", newUrl);

      return newTheme;
    });
  };

  return { theme, toggleTheme };
};

export default Theme;