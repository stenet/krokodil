document.addEventListener("DOMContentLoaded", () => {
  let increase = 2;

  const clicks = document.querySelector("#clicks");

  let clickCount = 0;
  let currentLeft = 300;
  let currentTop = 300;
  let changeLeft = 0;
  let changeTop = 0;

  const gameover = document.querySelector("#gameover");
  const krokodil = document.querySelector("#krokodil");
  const krokodilWidth = krokodil.clientWidth;
  const krokodilHeight = krokodil.clientHeight;

  setInterval(() => {

    currentLeft += changeLeft;
    krokodil.style.left = `${currentLeft}px`;

    currentTop += changeTop;
    krokodil.style.top = `${currentTop}px`;

    const isGameOver = currentTop < -krokodilHeight ||
      currentLeft < -krokodilWidth ||
      currentTop > (window.innerHeight + krokodilHeight) ||
      currentLeft > (window.innerWidth + krokodilWidth);

    if (isGameOver) {
      gameover.style.display = "flex";
    }
  }, 10);

  krokodil.addEventListener("mousedown", () => {
    clickCount++;
    clicks.innerText = clickCount;

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
    document.querySelector("#level").style.display = "none";
    krokodil.style.display = "block";

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