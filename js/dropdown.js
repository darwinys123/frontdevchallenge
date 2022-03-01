const nav = document.querySelector('header.mobile nav');
const sbar = document.querySelector('header.mobile .dropdown');
const closeOne = document.getElementById('close_nav');

const toggleNav = (bool) => {
    if (bool) return (nav.style.transform = 'translateX(0)');
    if (!bool) {
        setTimeout(() => (nav.style.transform = 'translateX(100%)'), 100);
    }
};

sbar.addEventListener('click', () => toggleNav(true));
closeOne.addEventListener('click', () => toggleNav(false));