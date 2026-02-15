document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".works-column").forEach(block => {
    const pcBtn = block.querySelector(".pcBtn");
    const spBtn = block.querySelector(".spBtn");
    const preview = block.querySelector(".preview");
    const inner = block.querySelector(".preview-inner");
    const img = block.querySelector(".previewImg");

    if (!pcBtn || !spBtn || !preview || !inner || !img) {
      console.warn("不足してる要素あり", block);
      return;
    }

    function switchView(type) {
      preview.classList.remove("pc", "sp");
      preview.classList.add(type);

      const base = img.dataset.base;
      img.src = `${base}_${type}.jpg`;

      inner.scrollTop = 0;

      pcBtn.classList.toggle("is-active", type === "pc");
      spBtn.classList.toggle("is-active", type === "sp");
    }

    pcBtn.addEventListener("click", () => switchView("pc"));
    spBtn.addEventListener("click", () => switchView("sp"));

    // 初期表示
    switchView("pc");
  });
});
