/* ---------- JS to power interactions ---------- */
(function(){"use strict";
  const $ = s => document.querySelector(s);
  const navToggle = document.querySelector('.nav-toggle');
  const header = document.querySelector('.site-header');
  const siteNav = document.getElementById('site-nav');
  const yearEl = document.getElementById('year');
  const themeToggle = document.getElementById('themeToggle');
  const blogGrid = document.getElementById('blogGrid');

  if(yearEl) yearEl.textContent = new Date().getFullYear();

  // Mobile nav
  if(navToggle){ 
    navToggle.addEventListener('click', () => { 
      header.classList.toggle('open'); 
      navToggle.setAttribute('aria-expanded', header.classList.contains('open')); 
    }); 
  }

  // Theme
  const savedTheme = localStorage.getItem('theme');
  if(savedTheme === 'light') document.documentElement.classList.add('light');
  if(themeToggle) themeToggle.addEventListener('click', () => { 
    document.documentElement.classList.toggle('light'); 
    localStorage.setItem('theme', document.documentElement.classList.contains('light') ? 'light' : 'dark'); 
  });

  // Blog posts (edit/add here)
  const posts = [
    { title: "How I Outline Without Killing the Fun", date: "2025-08-17", url: "./posts/first-post.html", tag: "Process", excerpt: "My 5-step outline that leaves space for surprise."},
    { title: "Tech x Fiction: Using Tools Without Losing Voice", date: "2025-08-17", url: "./posts/second-post.html", tag: "Craft", excerpt: "Notes on using AI and apps as a creative assistant—not a crutch."},
    { title: "What a Scary Mirror Taught Me About Regret", date: "2025-08-17", url: "./posts/third-post.html", tag: "Inspiration", excerpt: "A personal essay that became the seed for a novel."}
  ];

  function postCard(p){ return `
    <article class="card">
      <div class="kicker">${p.tag} · ${new Date(p.date).toLocaleDateString()}</div>
      <h3>${p.title}</h3>
      <p>${p.excerpt}</p>
      <a class="btn btn-outline" href="${p.url}">Read →</a>
    </article>`; }

  if(blogGrid){ blogGrid.innerHTML = posts.map(postCard).join(''); }

})();
