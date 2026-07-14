const menuButton = document.getElementById("menuButton");
const mainNav = document.getElementById("mainNav");
const searchInput = document.getElementById("searchInput");
const cards = [...document.querySelectorAll(".searchable")];
const emptyState = document.getElementById("emptyState");

menuButton.addEventListener("click", () => {
  mainNav.classList.toggle("open");
});

mainNav.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => mainNav.classList.remove("open"));
});

searchInput.addEventListener("input", () => {
  const query = searchInput.value.toLowerCase().trim();
  let visible = 0;

  cards.forEach(card => {
    const text = `${card.textContent} ${card.dataset.search}`.toLowerCase();
    const match = text.includes(query);
    card.style.display = match ? "flex" : "none";
    if (match) visible++;
  });

  emptyState.style.display = visible === 0 ? "block" : "none";
});

document.getElementById("year").textContent = new Date().getFullYear();
