// Обробник кнопок "Детальніше"


// Оцінка зірками
document.querySelectorAll('.star-rating').forEach(rating => {
  const stars = rating.querySelectorAll('.star');

  stars.forEach(star => {
    star.addEventListener('mouseover', () => {
      const val = parseInt(star.dataset.value);
      stars.forEach(s => {
        s.classList.toggle('hover', parseInt(s.dataset.value) <= val);
      });
    });

    star.addEventListener('mouseout', () => {
      stars.forEach(s => s.classList.remove('hover'));
    });

    star.addEventListener('click', () => {
      const selected = parseInt(star.dataset.value);
      stars.forEach(s => {
        s.classList.toggle('selected', parseInt(s.dataset.value) <= selected);
      });
      if (rating.dataset.id) {
        localStorage.setItem(`rating_${rating.dataset.id}`, selected);
      }
    });

    // Відновлення оцінки при завантаженні
    const saved = rating.dataset.id && localStorage.getItem(`rating_${rating.dataset.id}`);
    if (saved) {
      stars.forEach(s => {
        s.classList.toggle('selected', parseInt(s.dataset.value) <= saved);
      });
    }
  });
});

let totalSeconds = (4 * 3600) + (23 * 60) + 20;

function updateCountdown() {
  const h = Math.floor(totalSeconds / 3600);
  const m = Math.floor((totalSeconds % 3600) / 60);
  const s = totalSeconds % 60;

  document.getElementById('hours').textContent = String(h).padStart(2, '0');
  document.getElementById('minutes').textContent = String(m).padStart(2, '0');
  document.getElementById('seconds').textContent = String(s).padStart(2, '0');

  if (totalSeconds > 0) {
    totalSeconds--;
    setTimeout(updateCountdown, 1000);
  }
}

updateCountdown();


 const burgerMenuBtn = document.getElementById('burgerMenu');
const navLinksMenu = document.getElementById('navLinks');

burgerMenuBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  navLinksMenu.classList.toggle('show');
});

document.addEventListener('click', (e) => {
  const isClickInside = navLinksMenu.contains(e.target) || burgerMenuBtn.contains(e.target);
  if (!isClickInside) {
    navLinksMenu.classList.remove('show');
  }
});
