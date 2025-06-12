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

const container = document.querySelector('#projects .project');

function createCard(proj) {
  const card = document.createElement('div');
  card.className = 'card';
  card.innerHTML = `
    <img src="${proj.image}" alt="${proj.title}">
    <div class="project-info">
      <div class="project-bio">
        <h3>${proj.title}</h3>
        <p>${proj.tech || ''}</p>
      </div>
      <div class="project-link">
        <i class="fab fa-github"></i>
      </div>
    </div>`;
  if (proj.url) {
    card.addEventListener('click', () => {
      window.open(proj.url, '_blank');
    });
  }
  return card;
}

function loadCustomProjects() {
  const stored = localStorage.getItem('customProjects');
  if (!stored) return;
  JSON.parse(stored).forEach(p => container.appendChild(createCard(p)));
}

function saveCustomProject(proj) {
  const stored = localStorage.getItem('customProjects');
  const list = stored ? JSON.parse(stored) : [];
  list.push(proj);
  localStorage.setItem('customProjects', JSON.stringify(list));
}

fetch('projects.json')
  .then(response => response.json())
  .then(projects => {
    projects.forEach(proj => container.appendChild(createCard(proj)));
    loadCustomProjects();
  });

const toggleFormBtn = document.getElementById('toggle-form');
const form = document.getElementById('project-form');

toggleFormBtn.addEventListener('click', () => {
  form.classList.toggle('hidden');
});

form.addEventListener('submit', e => {
  e.preventDefault();
  const title = document.getElementById('form-title').value.trim();
  const url = document.getElementById('form-url').value.trim();
  const fileInput = document.getElementById('form-image');
  const file = fileInput.files[0];
  if (!(title && url && file)) return;

  const reader = new FileReader();
  reader.onload = function(event) {
    const proj = { title, url, image: event.target.result };
    saveCustomProject(proj);
    container.appendChild(createCard(proj));
    form.reset();
    form.classList.add('hidden');
  };
  reader.readAsDataURL(file);
});
