let horizontalId = "horizontal";
let verticalId = "vertical";

//Add pointer element to DOM
const initShoot = (horizontal = "horizontal", vertical = "vertical") => {
  if (
    document.getElementById(horizontal) === null &&
    document.getElementById(vertical) === null
  ) {
    horizontalId = horizontal;
    verticalId = vertical;
    const hPointer = document.createElement("div");
    hPointer.setAttribute("id", horizontal);
    document.body.appendChild(hPointer);

    const vPointer = document.createElement("div");
    vPointer.setAttribute("id", vertical);
    document.body.appendChild(vPointer);
  }
};

const movePointerShoot = ({
  color = "white",
  width = "3px",
  lengthEach = "65px",
  transition = "0s",
  transitionDuration = "100ms",
  mixBlendMode = "difference",
  zIndex = 100,
  borderRadius = "9999px",

  hLeftOffset = 30,
  hTopOffset = 0,
  vLeftOffset = 0,
  vTopOffset = 30,
}) => {
  if (
    document.getElementById(horizontalId) !== null &&
    document.getElementById(verticalId) !== null
  ) {
    const hPointer = document.getElementById(horizontalId).style;
    hPointer.backgroundColor = color;
    hPointer.width = lengthEach;
    hPointer.height = width;
    hPointer.transitionDuration = transitionDuration;
    hPointer.mixBlendMode = mixBlendMode;
    hPointer.zIndex = zIndex;
    hPointer.borderRadius = borderRadius;
    hPointer.position = "absolute";
    hPointer.pointerEvents = "none";

    const vPointer = document.getElementById(verticalId).style;
    vPointer.backgroundColor = color;
    vPointer.height = lengthEach;
    vPointer.width = width;
    vPointer.transitionDuration = transitionDuration;
    vPointer.mixBlendMode = mixBlendMode;
    vPointer.zIndex = zIndex;
    vPointer.borderRadius = borderRadius;
    vPointer.position = "absolute";
    vPointer.pointerEvents = "none";

    document.addEventListener("mousemove", (event) => {
      hPointer.transition = transition;
      hPointer.transform = "scale(1)";
      hPointer.left = `${event.pageX - hLeftOffset}px`;
      hPointer.top = `${event.pageY - hTopOffset}px`;

      vPointer.transition = transition;
      vPointer.transform = "scale(1)";
      vPointer.left = `${event.pageX - vLeftOffset}px`;
      vPointer.top = `${event.pageY - vTopOffset}px`;
    });

    document.addEventListener("mouseleave", () => {
      hPointer.transition = transition;
      hPointer.transform = "scale(0)";

      vPointer.transition = transition;
      vPointer.transform = "scale(0)";
    });
  }
};

export { initShoot, movePointerShoot };
