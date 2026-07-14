document.addEventListener('DOMContentLoaded', () => {
  const hour = new Date().getHours();
  const greeting = hour >= 5 && hour < 12 ? 'Good Morning,'
    : hour >= 12 && hour < 17 ? 'Good Afternoon,'
      : hour >= 17 && hour < 22 ? 'Good Evening,' : 'Hello,';

  const heading = document.getElementById('typewriter');
  let index = 0;

  function type() {
    if (index < greeting.length) {
      heading.textContent += greeting.charAt(index++);
      window.setTimeout(type, 120);
    } else {
      heading.classList.add('finished');
    }
  }
  type();

  const clock = document.getElementById('clock');
  function updateClock() {
    const now = new Date();
    clock.textContent = now.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', hour12: true });
    clock.dateTime = now.toISOString();
  }
  updateClock();
  window.setInterval(updateClock, 1000);

  const quotes = [
    'too bad you ended up here.',
    'this page exists because domains get lonely.',
    'currently building something.',
    'still figuring things out.',
    'under construction since 2026.',
    "it's giving... homepage.",
    'nothing interesting. yet.',
    'why are you here?'
  ];
  document.getElementById('quote').textContent = quotes[Math.floor(Math.random() * quotes.length)];

  const glow = document.querySelector('.cursor-glow');
  if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
    window.addEventListener('pointermove', (event) => {
      glow.style.left = `${event.clientX}px`;
      glow.style.top = `${event.clientY}px`;
      glow.classList.add('visible');
    });
    document.addEventListener('mouseleave', () => glow.classList.remove('visible'));
  }
});

console.log('👋 Hey, curious developer.\n\nWelcome to ihooman.xyz');
