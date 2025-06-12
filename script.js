const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach(n =>
  n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
  })
);

const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

function switchTheme(e) {
  const theme = e.target.checked ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
}

toggleSwitch.addEventListener('change', switchTheme);

const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
  document.documentElement.setAttribute('data-theme', currentTheme);
  if (currentTheme === 'dark') {
    toggleSwitch.checked = true;
  }
}

document.querySelector('#datee').textContent = new Date().getFullYear();

fetch('projects.json')
  .then(response => response.json())
  .then(projects => {
    const container = document.querySelector('#projects .project');
    projects.forEach(proj => {
      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `
        <img src="${proj.image}" alt="${proj.title}">
        <div class="project-info">
          <div class="project-bio">
            <h3>${proj.title}</h3>
            <p>${proj.tech}</p>
          </div>
          <div class="project-link">
            <i class="fab fa-github"></i>
          </div>
        </div>`;
      card.addEventListener('click', () => {
        if (proj.url) {
          window.open(proj.url, '_blank');
        }
      });
      container.appendChild(card);
    });
  });
