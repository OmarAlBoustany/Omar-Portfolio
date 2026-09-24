import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

// Brief exit transition for links that open another page of this portfolio.
document.addEventListener('click', (event) => {
  const link = event.target.closest('a[href]');
  if (!link || event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || link.target === '_blank' || link.hasAttribute('download')) return;
  const destination = new URL(link.href, window.location.href);
  if (destination.origin !== window.location.origin) return;
  const samePage = destination.pathname === window.location.pathname && destination.search === window.location.search;
  if (samePage) return; // Native anchor navigation gets smooth scrolling from CSS.
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  event.preventDefault();
  document.body.classList.add('page-leaving');
  window.setTimeout(() => { window.location.href = destination.href; }, 190);
});
