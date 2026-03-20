// Mobile nav toggle
const toggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
if (toggle && navLinks) {
  toggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    toggle.textContent = navLinks.classList.contains('open') ? '✕' : '☰';
  });
}

// Highlight active nav link based on current path
const path = window.location.pathname.replace(/\/$/, '') || '/';
document.querySelectorAll('.nav__link').forEach(link => {
  const href = link.getAttribute('href').replace(/\/$/, '') || '/';
  if (href === path || (href !== '' && path.startsWith(href) && href !== '/')) {
    link.classList.add('active');
  } else if (href === '/' && path === '') {
    link.classList.add('active');
  }
});

// Fixtures filter tabs (fixtures page only)
const filterTabs = document.querySelectorAll('.filter-tab');
if (filterTabs.length) {
  filterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      filterTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const filter = tab.dataset.filter;
      document.querySelectorAll('.round-section').forEach(section => {
        if (filter === 'all' || section.dataset.round === filter) {
          section.style.display = '';
        } else {
          section.style.display = 'none';
        }
      });
    });
  });
}
