const popup = document.querySelector('#contact-popup');
const closeButton = popup.querySelector('.close-popup');
let lastTrigger = null;
let dismissed = false;
try { dismissed = sessionStorage.getItem('contactDismissed') === 'yes'; } catch {}
const showContact = (trigger = null) => { lastTrigger = trigger; popup.hidden = false; if (trigger) closeButton.focus(); };
const closeContact = () => { popup.hidden = true; dismissed = true; try { sessionStorage.setItem('contactDismissed', 'yes'); } catch {} if (lastTrigger) { lastTrigger.focus(); lastTrigger = null; } };
document.querySelectorAll('[data-contact]').forEach(button => button.addEventListener('click', () => showContact(button)));
closeButton.addEventListener('click', closeContact);
document.addEventListener('keydown', event => { if (event.key === 'Escape' && !popup.hidden) closeContact(); });
document.querySelectorAll('a[href^="tel:"]').forEach(link => link.addEventListener('click', () => { dismissed = true; popup.hidden = true; try { sessionStorage.setItem('contactDismissed', 'yes'); } catch {} }));
setTimeout(() => { if (!dismissed && popup.hidden) showContact(); }, 10000);
document.querySelector('#year').textContent = new Date().getFullYear();
