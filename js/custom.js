var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

//navbar scroll class
$(window).scroll(function() {    
  var scroll = $(window).scrollTop();
  if (scroll >= 200) {
      $("header").addClass("active");
  } else {
      $("header").removeClass("active");
  }
});

//dropdown mouseover open
if ($(window).width() > 992) {
  $(document).ready(function() {
    $('.dropdown').hover(
    function() {
        $('.dropdown-toggle', this).addClass('show');
        $('.dropdown-menu', this).addClass('show');
    }, function() {
        $('.dropdown-toggle', this).removeClass('show');
        $('.dropdown-menu', this).removeClass('show');
    });
});
}

//Parallax 
function simpleParallax() {
  var scrolled = $(window).scrollTop() + 1;
  $('.parallax').css('background-position', '0' + -(scrolled * 0.3) + 'px');
}
$(window).scroll(function (e) {
  simpleParallax();
});

//hero banner mouse effect
const obj = document.querySelector('.obj');
const container = document.querySelector('.container');
container.addEventListener('mousemove', (e) => {
  const xAxis = (window.innerWidth / 2 - e.pageX) / 120;
  const yAxis = (window.innerHeight / 2 - e.pageY) / 120;
  obj.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});
container.addEventListener('mouseleave', () => {
  obj.style.transform = 'rotateY(0deg) rotateX(0deg)';
});