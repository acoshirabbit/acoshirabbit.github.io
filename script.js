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
  
const colors = ["#D98CD2", "#FFFFFF", "#00145A", "#DCDDC6", "#F8F8F8"];
const numBalls = 50;
const balls = [];
  
for (let i = 0; i < numBalls; i++) {
  let ball = document.createElement("div");

  ball.classList.add("ball");
  ball.style.background = colors[Math.floor(Math.random() * colors.length)];
  ball.style.left = `${Math.floor(Math.random() * 100)}vw`;
  ball.style.top = `${Math.floor(Math.random() * 100)}vh`;
  ball.style.transform = `scale(${Math.random()})`;
  ball.style.width = `${Math.random()}em`;
  ball.style.height = ball.style.width;

  balls.push(ball);
  document.body.append(ball);
}

balls.forEach((el, i, ra) => {
  let to = {
    x: Math.random() * (i % 1 === 0 ? -1 : 1),
    y: Math.random() * 18
  };
  let anim = el.animate(
    [
      { transform: "translate(0, 0)" },
      { transform: `translate(${to.x}rem, ${to.y}rem)` }
    ],
    {
      duration: (Math.random() + 1) * 2000, // random duration
      direction: "alternate",
      fill: "both",
      iterations: Infinity,
      easing: "ease-in-out"
    }
  );
}); 
})(jQuery);
