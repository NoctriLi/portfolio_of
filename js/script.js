

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header .navbar a');


window.onscroll = () => {

    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 400;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header .navbar a[href*=' + id + ']').classList.add('active');
            });
            sec.classList.add('show-animate');
        } else {

            sec.classList.remove('show-animate');
        }
        
    });
    
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');


    let footer = document.querySelector('footer');

    footer.classList.toggle('show-animate', this.innerHeight + this.scrollY + 1 >= document.scrollingElement.scrollHeight)
};



const tabs = document.querySelectorAll('.tab');
const panels = document.querySelectorAll('.tab-panel');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const tabId = tab.getAttribute('data-tab');
  
    const panel = document.querySelector(`.tab-panel[data-tab="${tabId}"]`);
    panels.forEach(panel => {
      panel.style.display = 'none';
    });
    tabs.forEach(tab => {
    tab.classList.remove('active');
    });
    panel.style.display = 'flex';
    tab.classList.add('active');
  });
});
document.querySelector(`.tab-panel[data-tab="${'tab1'}"]`).style.display = 'flex';