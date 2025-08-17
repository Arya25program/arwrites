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
    { title: "Last Without Anything", date: "26-04-2023", url: "./posts/first-post.html", tag: "Short Story", excerpt: "How did she disappear?."},
    { title: "Our Autistic Kid", date: "29-02-2024", url: "./posts/second-post.html", tag: "Short Story", excerpt: "How did he behave?."}
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
