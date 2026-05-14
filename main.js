// Sticky header shadow on scroll
const header = document.getElementById('siteHeader');
if (header) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 8) header.classList.add('scrolled');
    else header.classList.remove('scrolled');
  });
}

// Mobile nav toggle
const toggle = document.getElementById('navToggle');
const nav = document.getElementById('primaryNav');
if (toggle && nav) {
  toggle.addEventListener('click', () => nav.classList.toggle('open'));
  nav.addEventListener('click', e => {
    if (e.target.tagName === 'A') nav.classList.remove('open');
  });
}

// Auto-update copyright year
const yearEl = document.getElementById('copyYear');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Highlight active nav link based on current path
(function highlightActiveNav() {
  if (!nav) return;
  const path = window.location.pathname.toLowerCase();
  nav.querySelectorAll('a').forEach(a => {
    const href = (a.getAttribute('href') || '').toLowerCase();
    if (href === path || (path === '/' && href === '/')) {
      a.classList.add('active');
    } else if (href !== '/' && path.startsWith(href.replace(/\.html$/, ''))) {
      // match /about for /about.html
    }
  });
})();

// Callback form handler (HIPAA-safe: name/phone/best time only, NO health info)
const callbackForm = document.getElementById('callbackForm');
if (callbackForm) {
  callbackForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const status = document.getElementById('formStatus');
    status.className = 'form-status';
    status.style.display = 'none';

    const data = Object.fromEntries(new FormData(callbackForm).entries());

    // Strict client-side validation — keep this form HIPAA-safe
    if (!data.name || !data.phone) {
      status.textContent = 'Please enter your name and phone number.';
      status.className = 'form-status error';
      return;
    }

    try {
      const res = await fetch('/api/inquire', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const out = await res.json();
      if (out.ok) {
        status.textContent = 'Thank you. The office will call you back shortly.';
        status.className = 'form-status success';
        callbackForm.reset();
      } else {
        throw new Error(out.message || 'Submission failed');
      }
    } catch (err) {
      status.textContent = 'Something went wrong. Please call (480) 595-6101.';
      status.className = 'form-status error';
    }
  });
}
