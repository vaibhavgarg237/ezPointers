let pointerId = "mouse-pointer";

//Add pointer element to DOM
const init = (ptr = "mouse-pointer") => {
  if (document.getElementById(ptr) === null) {
    console.log("init called ", ptr);
    pointerId = ptr;
    const mousePointer = document.createElement("div");
    mousePointer.setAttribute("id", ptr);
    document.body.appendChild(mousePointer);
  }
};

const movePointer = ({
  color = "white",
  width = "3.5rem",
  height = "3.5rem",
  transition = "0.2s",
  transitionDuration = "100ms",
  mixBlendMode = "difference",
  zIndex = 100,
  borderRadius = "9999px",
  leftOffset = 30,
  topOffset = 30,
}) => {
  if (document.getElementById(pointerId) !== null) {
    console.log("move called ", color, width, height);
    const pointerStyle = document.getElementById(pointerId).style;
    //Add css
    pointerStyle.backgroundColor = color;
    pointerStyle.width = width;
    pointerStyle.height = height;
    pointerStyle.transitionDuration = transitionDuration;
    pointerStyle.mixBlendMode = mixBlendMode;
    pointerStyle.zIndex = zIndex;
    pointerStyle.borderRadius = borderRadius;
    pointerStyle.position = "absolute";
    pointerStyle.pointerEvents = "none";

    //Handle mouse events
    document.addEventListener("mousemove", (event) => {
      pointerStyle.transition = transition;
      pointerStyle.transform = "scale(1)";
      pointerStyle.left = `${event.pageX - leftOffset}px`;
      pointerStyle.top = `${event.pageY - topOffset}px`;
    });

    document.addEventListener("mouseleave", () => {
      pointerStyle.transition = transition;
      pointerStyle.transform = "scale(0)";
    });
  }
};

export { init, movePointer };
