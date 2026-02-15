const categoryGroup = document.querySelector('#filter');
const items = document.querySelectorAll('.work-box');

categoryGroup.querySelectorAll('.filter-item').forEach(btn => {
  btn.addEventListener('click', () => {
    btn.classList.toggle('active');
    filterItems();
  });
});

function filterItems() {
  const selected = [...categoryGroup.querySelectorAll('.active')]
    .map(a => a.textContent.trim());

  items.forEach(item => {
    const categories = item.dataset.cat
      .split(",")
      .map(c => c.trim());

    if (selected.length === 0) {
      item.style.display = "";
      return;
    }

    const match = selected.some(sel => categories.includes(sel));

    item.style.display = match ? "" : "none";
  });
}
