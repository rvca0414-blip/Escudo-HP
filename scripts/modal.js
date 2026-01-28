document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('modal');
  const modalImg = document.getElementById('modal-image');
  const modalName = document.getElementById('modal-name');
  const modalEvent = document.getElementById('modal-event');
  const modalResult = document.getElementById('modal-result');
  const closeBtn = document.querySelector('.close');

  document.querySelectorAll('.clickable').forEach(el => {
    el.addEventListener('click', () => {
      modalImg.src = el.dataset.img;
      modalName.textContent = el.dataset.name;
      modalEvent.textContent = el.dataset.event;
      modalResult.textContent = el.dataset.result;
      modal.style.display = 'block';
    });
  });

  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  window.addEventListener('click', e => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });

  document.querySelectorAll('.event-toggle').forEach(toggle => {
    toggle.addEventListener('click', () => {
      const event = toggle.closest('.event');
      event.classList.toggle('open');
    });
  });
});
