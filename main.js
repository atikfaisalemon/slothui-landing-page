const items = document.querySelectorAll(".accordion .item");

items.forEach((item) => {
  item.querySelector(".title").onclick = () => {
    items.forEach((i) => i !== item && i.classList.remove("active"));
    item.classList.toggle("active");
  };
});
