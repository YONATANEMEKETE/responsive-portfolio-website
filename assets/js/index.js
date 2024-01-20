/*=============== SERVICES MODAL ===============*/
const button = document.querySelectorAll('.services__button'); 
const modal = document.querySelectorAll('.services__modal');
const close = document.querySelectorAll('.services__modal-close'); 

const activeModal = (modalElem) => {
 
  modal[modalElem].classList.add('active-modal') 
};
 
button.forEach((mb, i) => {
  mb.addEventListener('click', () =>{
    activeModal(i)
  })
});
 
close.forEach(cb => {
    cb.addEventListener('click', () =>{
      modal.forEach(mo =>{
        mo.classList.remove('active-modal')
      })
    })
})


/*=============== SWIPER TESTIMONIAL ===============*/
const swiper = new Swiper('.swiper', {

  loop: true,
  spaceBetween: 32,
  grabCursor: true,
  pagination: {
    el: '.swiper-pagination',
    dynamicBullets: true,
    clickable: true,
  },

});

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = document.getElementById('scroll-up'); 

const scrollAction = () => {
  this.scrollY > 350 ? scrollUp.classList.add('show-scroll')
                     : scrollUp.classList.remove('show-scroll')
}


window.addEventListener('scroll', scrollAction)