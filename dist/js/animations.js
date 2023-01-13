// SRPS ANIMATIONS

let gameInit = anime.timeline({
  easing: "easeInOutExpo",
  duration: 3000,
});

gameInit
  .add({
    targets: ".buttondiv",
    scale: [0, 1],
    delay: 1000,
    duration: 750,
  })
  .add(
    {
      targets: "#srps-div",
      opacity: [0, 1],
      translateY: [-50, 0],
      duration: 750,
    },
    "-=200"
  )
  .add(
    {
      targets: "#srps-tag",
      opacity: [0, 1],
      duration: 750,
    },
    "-=800"
  )
  .add(
    {
      targets: "#code-tag",
      opacity: [0, 1],
      duration: 750,
    },
    "-=950"
  );

gameInit.finished.then(function () {
  let buttonBounce = anime.timeline({
    duration: 1200,
    easing: "easeInOutExpo",
    loop: true,
    direction: "alternate",
    delay: 3000,
  });

  buttonBounce.add({
    targets: ".buttondiv",
    scale: [1, 1.25],
  });
});
