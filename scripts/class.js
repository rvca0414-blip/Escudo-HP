document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("slide-in-visible");
        observer.unobserve(entry.target); // 1回だけ表示させたい場合
      }
    });
  }, {
    threshold: 0.1
  });

  document.querySelectorAll('.slide-in-left, .slide-in-right').forEach(el => {
    observer.observe(el);
  });
});

window.addEventListener("scroll", () => {
  const container = document.querySelector(".image-container");
  const rect = container.getBoundingClientRect();

  if (rect.top < window.innerHeight * 0.8) {
    container.classList.add("visible");
  }
});

