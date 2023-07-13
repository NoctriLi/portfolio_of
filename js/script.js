
//////////
///active menus

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header .navbar a');

///////
//scroll
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
///////
//tabs

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

var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var imgs = document.querySelectorAll('.slide');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");


imgs.forEach(img => {
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    modalImg.alt = this.alt;
    captionText.innerHTML = this.alt;
}
});


 const modalButton = document.getElementById('modal-btn');
 const aboutModal = document.getElementById('about-modal');


  
modal.onclick = function() {
    img01.className += " out";
    setTimeout(function() {
       modal.style.display = "none";
       img01.className = "modal-content";
     }, 400);
    
 }
aboutModal.onclick = function() {
    modalText.className += " out";
    setTimeout(function() {
       aboutModal.style.display = "none";
       modalText.className = "modal-content";
     }, 400);
    
 }



document.querySelector(`.tab-panel[data-tab="${'tab1'}"]`).style.display = 'flex';

document.querySelector(`.tab[data-tab="${'tab1'}"]`).classList.add('active');


////////////
//submit form

const btn = document.getElementById('email-button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_sn0brr7';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Sent!';
      btn.disabled = true;
    }, (err) => {
      btn.value = 'Error';
      btn.disabled = true;
    });
});
