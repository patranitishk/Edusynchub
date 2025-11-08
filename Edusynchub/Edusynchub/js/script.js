var textWrapper = document.querySelector('.ml2 .learn');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml2 .learn .letter',
    scale: [4,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 950,
    delay: (el, i) => 70*i
  }).add({
    targets: '.ml2 .learn',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });
  var textWrapper = document.querySelector('.ml6 ');
textWrapper.innerHTML = textWrapper.textContent.replace(/(prepare for academic )|(exam and placement in )|(minimum time without )|(any hassle.)/g, "<div class='line'>$&</div>");

anime.timeline({loop: true})
  .add({
    targets: '.ml6 .line',
    translateY: ["1.1em", 0],
    translateZ: 0,
    duration: 900,
    delay: (el, i) => 50 * i
  }).add({
    targets: '.ml6',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });

  
