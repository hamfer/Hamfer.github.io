const nav = document.querySelector('#header');
const intro = document.getElementById('intro');
const scrolldownIcon = document.getElementById('scrolldown');

const navStyles = ['bg-gray-600/5', 'border-b', 'backdrop-blur'];

document.addEventListener('scroll', (e) => {
  const scrolled = this.scrollY;
  const scrolledP = (this.innerHeight - this.scrollY) / this.innerHeight;
  intro.style.transform = `translateX(${scrolled}px)`;
  scrolldownIcon.style.opacity = scrolledP;
  if (this.scrollY < screen.height - 50) {
    nav.classList.remove(...navStyles);
    return;
  }
  nav.classList.add(...navStyles);
});
