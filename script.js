const nav = document.querySelector('#header');

const navStyles = ['bg-gray-600/5', 'border-b', 'backdrop-blur'];

document.addEventListener('scroll', (e) => {
  if (this.scrollY < screen.height - 50) {
    nav.classList.remove(...navStyles);
    return;
  }
  nav.classList.add(...navStyles);
});
