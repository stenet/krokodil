document.addEventListener("DOMContentLoaded", () => {
  let increase = 2;

  const clickText = document.querySelector("#clickText");

  let clickCount = 0;
  let currentLeft = 300;
  let currentTop = 300;
  let changeLeft = 0;
  let changeTop = 0;

  const clicks = document.querySelector("#clicks");
  const gameover = document.querySelector("#gameover");
  const skin = document.querySelector("#skin");
  const level = document.querySelector("#level");
  const tier = document.querySelector("#tier");

  setInterval(() => {

    currentLeft += changeLeft;
    tier.style.left = `${currentLeft}px`;

    currentTop += changeTop;
    tier.style.top = `${currentTop}px`;

    const isGameOver = currentTop < -tier.clientHeight ||
      currentLeft < -tier.clientWidth ||
      currentTop > (window.innerHeight + tier.clientHeight) ||
      currentLeft > (window.innerWidth + tier.clientWidth);

    if (isGameOver) {
      gameover.style.display = "flex";
    }
  }, 10);

  document.querySelectorAll("#skin button").forEach(btn => {
    btn.addEventListener("click", () => {
      skin.style.display = "none";
      level.style.display = "flex";

      tier.src = btn.querySelector("img").src;
    });
  })

  tier.addEventListener("mousedown", () => {
    clickCount++;
    clickText.innerText = clickCount;

    go();
  });

  document.querySelector("#levelLeicht").addEventListener("click", () => {
    start(2);
  });
  document.querySelector("#levelMittel").addEventListener("click", () => {
    start(3.5);
  });
  document.querySelector("#levelSchwer").addEventListener("click", () => {
    start(5);
  });

  function start(inc) {
    increase = inc;
    clicks.style.display = "block";
    level.style.display = "none";
    tier.style.display = "block";

    go();
  }

  function go() {
    const d = Math.floor(Math.random() * 4 - 0.0000001);

    switch (d) {
      case 0: {
        changeLeft = increase;
        changeTop = 0;
        break;
      }
      case 1: {
        changeLeft = -increase;
        changeTop = 0;
        break;
      }
      case 2: {
        changeLeft = 0;
        changeTop = increase;
        break;
      }
      case 3: {
        changeLeft = 0;
        changeTop = -increase;
        break;
      }
    }
  }
});