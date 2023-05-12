(function ($) {
  
  $(window).on('load hashchange', function(){
    
    $('.content-region').hide();
    
    $('.main-menu a').removeClass('active');
    var region = location.hash.toString() || $('.main-menu a:first').attr('href');
    
    $(region).show();
    
    $('.main-menu a[href="'+ region +'"]').addClass('active');

  });
       
  const hamburger = document.querySelector("hamburger");
  const navMenu = document.querySelector("ul.main-menu");
  const navLink = document.querySelectorAll("ul.main-menu li a");

  hamburger.addEventListener("click", mobileMenu);
  navLink.forEach(n => n.addEventListener("click", closeMenu));

    function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    }

    function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    }
  
})(jQuery);
