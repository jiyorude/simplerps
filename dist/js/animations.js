let gameInit = anime.timeline({
  easing: "easeInOutExpo",
  duration: 3000,
});

gameInit
  .add({
    targets: ".buttondiv",
    scale: [0, 1],
    marginTop: [0, 0],
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

document.querySelector(".buttondiv").onclick = function () {
  gameStart();
};

gameStart = () => {
  let startGameAni = anime.timeline({
    duration: 1200,
    easing: "easeInOutBack",
    direction: "fowards",
    loop: false,
  });

  startGameAni
    .add({
      targets: ".buttondiv",
      translateX: [0, -3000],
      opacity: [1, 0],
      delay: 200,
    })
    .add({
      targets: "#choiceprompt",
      opacity: [0, 1],
      translateX: [3000, 0],
    })
    .add({
      targets: ".buttondiv",
      marginTop: [0, -3000],
    });
};

document.querySelector("#rock").onclick = function () {
  loading();
};

document.querySelector("#paper").onclick = function () {
  loading();
};

document.querySelector("#scissors").onclick = function () {
  loading();
};

loading = () => {
  let loadAni = anime.timeline({
    easing: "easeInOutExpo",
    direction: "forwards",
    duration: 450,
  });

  loadAni
    .add({
      targets: "#rock, #paper, #scissors",
      opacity: [1, 0],
    })
    .add({
      targets: "h1",
      opacity: [1, 0],
    })
    .add({
      targets: "h1, #rock, #paper, #scissors",
      marginTop: -2000,
    });

  loadAni.finished.then(function () {
    let resultAni = anime.timeline({
      easing: "easeInOutExpo",
      direction: "forwards",
    });

    resultAni
      .add({
        targets: ".result",
        marginTop: -2000,
        display: "none",
      })
      .add({
        targets: ".result",
        opacity: [0, 1],
        display: "block",
        marginTop: -40,
      })
      .add({
        targets: "#playerResult",
        opacity: [0, 1],
        delay: 500,
      })
      .add({
        targets: "#cpuResult",
        opacity: [0, 1],
        delay: 500,
      })
      .add(
        {
          targets: "#finalResult",
          opacity: [0, 1],
          delay: 1500,
        },
        "-=1500"
      )
      .add({
        targets: "#outcome",
        opacity: [0, 1],
        delay: 1500,
      });
  });
};

document.querySelector("#returnHome").onclick = function () {
  fadeToBlack();
};

let resetButton = document.getElementById("returnHome");
let activateResetButton = (resetButton.onclick = function () {
  let fadeLine = anime.timeline({
    direction: "forwards",
    loop: false,
  });

  fadeLine.add({
    targets: ".result, #srps-div, #srps-tag, #code-tag, .srps-tag, .code-text, .srps-logo, #startGame, .buttondiv",
    opacity: [1, 0],
  });

  setTimeout(() => {
    window.location.reload();
  }, 2000);
});
