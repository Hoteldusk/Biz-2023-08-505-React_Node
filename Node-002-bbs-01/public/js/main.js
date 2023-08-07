document.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector("nav.main");
  nav?.addEventListener("click", (e) => {
    const navItem = e.target;
    const className = navItem.className;

    if (navItem.tagName === "LI") {
      // className 이 home 이면 / 아니면 className
      const URL = (navItem.className === "home" && "/") || className;
      document.location.href = URL;
    }
  });
  console.log("Hello Korea");
});
