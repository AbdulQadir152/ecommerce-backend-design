// Mobile hamburger toggle
const hamburger = document.getElementById('hamburger');
const nav       = document.getElementById('nav');
if (hamburger) {
  hamburger.addEventListener('click', () => nav.classList.toggle('open'));
}

// Global cart badge updater (called from product-detail & cart pages)
function updateCartBadge(count) {
  const badge = document.getElementById('cart-badge');
  if (!badge) return;
  if (count > 0) {
    badge.textContent    = count;
    badge.style.display  = 'inline-flex';
  } else {
    badge.style.display  = 'none';
  }
}
