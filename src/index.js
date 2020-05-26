$(window).scroll(function () {
  const header = $('header')[0];

  $('nav').toggleClass('fixed-top', $(this).scrollTop() > header.clientHeight);
  $('p.backTop').toggleClass('show', $(this).scrollTop() > 300);
});

