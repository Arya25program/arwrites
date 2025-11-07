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
    { title: "Last Without Anything", date: "2023-04-26", url: "./posts/first-post.html", tag: "Short Story", excerpt: "How did she disappear?"},
    { title: "Our Autistic Kid", date: "2024-02-29", url: "./posts/second-post.html", tag: "Short Story", excerpt: "How did he plan that?"},
    { title: "Shenanigans Ending the year", date: "2024-06-15", url: "./posts/third-post.html", tag: "Short Story", excerpt: "How did the year it end?"},
    { title: "The Silence You Left Behind", date: "2025-09-11", url: "./posts/four-post.html", tag: "Short Story", excerpt: "How her absence changed me?"},
    { title: "Disappearing Act", date: "2024-09-27", url: "./posts/five-post.html", tag: "Short Story", excerpt: "How dumb can I ever be?"},
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
