window.addEventListener('load', () => {
   window.scrollTo(0, 0);
  updateWidth();
  const navItems = document.querySelectorAll('.nav-second-column a');
  navItems.forEach((item, index) => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(20px)';
    item.style.animation = `slideUp 0.6s ease-out forwards`;
    item.style.animationDelay = `${index * 0.2}s`;
  });
});
window.addEventListener('resize', () => {
  updateWidth();
});

const updateWidth = () => {
  const width = window.innerWidth;
  console.log(width)
  const navSecondColumn = document.getElementById('nav-second-column');
  const navHamburgerIcon = document.getElementById('nav-hamburger-icon');
  if (width < 992) {
    navSecondColumn.classList.add('d-none');
    navHamburgerIcon.classList.remove('d-none');
  }
  else {
    navSecondColumn.classList.remove('d-none');
    navHamburgerIcon.classList.add('d-none');
  }

}

const openNavItems = () => {
  const openItems = document.getElementById('openIcon');
  const closeItems = document.getElementById('closeIcon');
  const showNavOptions = document.getElementById('showNavOptions');
  const navbar = document.querySelector('.navBar-container');
  const elements = document.querySelectorAll('.removeheight');
  const navIsOpening = closeItems.classList.contains('d-none');

  openItems.classList.toggle('d-none', navIsOpening);
  closeItems.classList.toggle('d-none', !navIsOpening);
  showNavOptions.classList.toggle('d-none', !navIsOpening);
  navbar.style.height = navIsOpening ? '100vh' : '20vh';

  if (navIsOpening) {
   updateNav(elements)
  }
  else {
    updateNav(elements);
}

}
const updateNav=(elements)=>{
   elements.forEach(el => {
      if (el.classList.contains('h-100')) {
        el.classList.remove('h-100');
        el.classList.add('h-25');
      } 
      else{
        el.classList.remove('h-25');
        el.classList.add('h-100');
         
      }
    });
}
