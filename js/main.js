document.querySelector('.header__search')?.addEventListener('click', () => {
  document.querySelector('.header__search-input')?.focus();
});

let online = 247;
const onlineElement = document.querySelector('.stats__number_green');

function updateOnline() {
  if (Math.random() > 0.3) return;
  const delta = Math.random() < 0.6 ? 1 : -1;
  let newOnline = online + delta;
  if (newOnline >= 210 && newOnline <= 290) {
    online = newOnline;
    onlineElement.textContent = online;
  }
}
setInterval(updateOnline, 10000);

let buildsCount = 15834;
const buildsElement = document.querySelector('.stats__number');
const createBtn = document.querySelector('.hero__btn_primary');

createBtn?.addEventListener('click', () => {
  buildsCount++;
  buildsElement.textContent = buildsCount.toLocaleString('ru-RU');
  buildsElement.style.transform = 'scale(1.1)';
  setTimeout(() => buildsElement.style.transform = '', 200);
});

const searchInput = document.querySelector('.header__search-input');
const searchBlock = document.querySelector('.header__search');

function performSearch() {
  const query = searchInput.value.trim().toLowerCase();
  if (query === '') return;
  alert(`🔍 Поиск: ${query}\n\n(Пока просто демо — скоро будут результаты!)`);
  console.log(`🔎 Поиск по сайту: ${query}`);
}

searchInput?.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') performSearch();
});
searchBlock?.addEventListener('submit', (e) => e.preventDefault());

// Данные слайдов
const features = [
  {
    title: "AI-помощник",
    description: "Умный ассистент анализирует ваши требования и подбирает оптимальные компоненты...",
    color: "#7C3AED",
    bgColor: "#F5F3FF",
    watermarkPath: '<path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/>',
    iconPath: '<path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/>'
  },
  {
    title: "2.5D визуализация",
    description: "Интерактивная визуализация вашей сборки в реальном времени...",
    color: "#0891B2",
    bgColor: "#ECFEFF",
    watermarkPath: '<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><path d="M12 22V12"/><path d="M3.3 7 12 12l8.7-5"/>',
    iconPath: '<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><path d="M12 22V12"/><path d="M3.3 7 12 12l8.7-5"/>'
  },
  {
    title: "Ручные цены",
    description: "Впишите реальную цену компонента с Авито или Юлы...",
    color: "#059669",
    bgColor: "#ECFDF5",
    watermarkPath: '<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',
    iconPath: '<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>'
  },
  {
    title: "Сообщество",
    description: "Делитесь своими сборками, изучайте конфигурации других пользователей...",
    color: "#DC2626",
    bgColor: "#FEF2F2",
    watermarkPath: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
    iconPath: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>'
  },
  {
    title: "Совместимость",
    description: "Автоматическая проверка совместимости всех компонентов...",
    color: "#EA580C",
    bgColor: "#FFF7ED",
    watermarkPath: '<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>',
    iconPath: '<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>'
  }
];

let currentSlide = 0;
let autoplayTimer = null;

const featureTitle = document.getElementById('featureTitle');
const featureDescription = document.getElementById('featureDescription');
const iconBadge = document.getElementById('iconBadge');
const watermarkIcon = document.getElementById('watermarkIcon');
const contentIcon = document.getElementById('contentIcon');
const imageUrl = document.getElementById('imageUrl');

function updateSlide(index) {
  currentSlide = index;
  const feature = features[currentSlide];
  
  featureTitle.textContent = feature.title;
  featureDescription.textContent = feature.description;
  if (imageUrl) imageUrl.textContent = feature.title.toLowerCase().replace(/ /g, '-') + '-demo';
  
  if (contentIcon) {
    contentIcon.innerHTML = feature.iconPath;
    contentIcon.style.color = feature.color;
  }
  if (watermarkIcon) {
    watermarkIcon.innerHTML = feature.watermarkPath;
    watermarkIcon.style.color = feature.color;
  }
  
  iconBadge.style.backgroundColor = feature.color + '15';
  iconBadge.style.border = '1px solid ' + feature.color + '30';
  
  document.querySelectorAll('.slider-dot').forEach((dot, i) => {
    if (i === currentSlide) {
      dot.classList.add('slider-dot_active');
      dot.style.backgroundColor = feature.color;
    } else {
      dot.classList.remove('slider-dot_active');
      dot.style.backgroundColor = '#D0D7DE';
    }
  });
  
  document.querySelectorAll('.thumbnail').forEach((thumb, i) => {
    if (i === currentSlide) {
      thumb.classList.add('thumbnail_active');
      thumb.style.borderColor = feature.color;
      // Убрал изменение backgroundColor для wrapper
      const icon = thumb.querySelector('.thumbnail__icon');
      if (icon) icon.style.color = feature.color;
      const title = thumb.querySelector('.thumbnail__title');
      if (title) title.style.color = feature.color;
    } else {
      thumb.classList.remove('thumbnail_active');
      thumb.style.borderColor = 'transparent';
      const icon = thumb.querySelector('.thumbnail__icon');
      if (icon) icon.style.color = '#6B7280';
      const title = thumb.querySelector('.thumbnail__title');
      if (title) title.style.color = '#6B7280';
    }
  });
}

function goToPrevious() {
  currentSlide = (currentSlide - 1 + features.length) % features.length;
  updateSlide(currentSlide);
  resetAutoplay();
}

function goToNext() {
  currentSlide = (currentSlide + 1) % features.length;
  updateSlide(currentSlide);
  resetAutoplay();
}

function startAutoplay() {
  if (autoplayTimer) clearInterval(autoplayTimer);
  autoplayTimer = setInterval(() => {
    goToNext();
  }, 5000);
}

function resetAutoplay() {
  if (autoplayTimer) {
    clearInterval(autoplayTimer);
    startAutoplay();
  }
}

document.getElementById('prevBtn')?.addEventListener('click', goToPrevious);
document.getElementById('nextBtn')?.addEventListener('click', goToNext);

document.querySelectorAll('.slider-dot').forEach((dot, index) => {
  dot.addEventListener('click', () => {
    updateSlide(index);
    resetAutoplay();
  });
});

document.querySelectorAll('.thumbnail').forEach((thumb, index) => {
  thumb.addEventListener('click', () => {
    updateSlide(index);
    resetAutoplay();
  });
});

updateSlide(0);
startAutoplay();