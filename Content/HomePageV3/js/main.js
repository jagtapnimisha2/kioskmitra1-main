$(window).scroll(function(){
    if($(window).scrollTop() >= 100){
        $(".navbar").addClass('fixed')
    }else{
        $(".navbar").removeClass('fixed')
    } 
})


$('.testimonials').owlCarousel({
    loop:true,
    margin:20,
    nav:true,
    autoplay: true,
    smartSpeed: 800,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})


$('.our-partner').owlCarousel({
    loop:true,
    margin:15,
    nav:false,
    autoplay: true,
    smartSpeed: 800,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:6
        }
    }
});




const button = document.querySelector('.topscroll');

const displayButton = () => {
  window.addEventListener('scroll', () => {
    console.log(window.scrollY);
  
    if (window.scrollY > 100) {
      button.style.display = "block";
    } else {
      button.style.display = "none";
    }
  });
};

const scrollToTop = () => {
  button.addEventListener("click", () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    }); 
    console.log(event);
  });
};

displayButton();
scrollToTop();