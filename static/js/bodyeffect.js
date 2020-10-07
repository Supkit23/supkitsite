var textWrapper = document.querySelector('.wrapper .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.body_container .body_left .wrapper .line',
    scaleY: [0,1],
    opacity: [0.5,1],
    easing: "easeOutExpo",
    duration: 700
  })
  .add({
    targets: '.body_container .body_left .wrapper .line',
    translateX: [0, document.querySelector('.wrapper .letters').getBoundingClientRect().width + 10],
    easing: "easeOutExpo",
    duration: 700,
    delay: 100
  }).add({
    targets: '.body_container .body_left .wrapper .letter',
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 600,
    offset: '-=775',
    delay: (el, i) => 34 * (i+1)
  }).add({
    targets: '.body_container .body_left .wrapper',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });