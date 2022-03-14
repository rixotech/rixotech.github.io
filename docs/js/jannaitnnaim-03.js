function circularIconsPattern() {
  let theta = Math.PI / 3;
  let newTheta = 0;
  let newX = 0;
  let newY = 0;

  let wheelRadius = window.innerWidth >= 425 ? 150 : 100;

  const icons = document.querySelectorAll(".features__icons__container");
  const orientation = document.querySelector(".features__icons__container--orientation");

  const center = {
    x: parseFloat(getComputedStyle(orientation).left),
    y: parseFloat(getComputedStyle(orientation).top),
  };

  icons.forEach((icon, index) => {
    newTheta = theta * index;
    newX = Math.cos(newTheta) * wheelRadius;
    newY = Math.sin(newTheta) * wheelRadius;

    icon.style.left = center.x + newX + "px";
    icon.style.top = center.y + -1 * newY + "px";
  });
}

circularIconsPattern();
window.addEventListener("resize", circularIconsPattern);
