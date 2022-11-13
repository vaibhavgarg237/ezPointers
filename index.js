const handlePointer = () => {
  //Add pointer element to DOM
  const mousePointer = document.createElement("div");
  mousePointer.setAttribute("id", "mouse-pointer");
  document.body.appendChild(mousePointer);
  const pointerStyle = mousePointer.style;

  //Add css
  pointerStyle.backgroundColor = "white";
  pointerStyle.width = "3.5rem";
  pointerStyle.height = "3.5rem";
  pointerStyle.borderRadius = "9999px";
  pointerStyle.zIndex = "1";
  pointerStyle.position = "absolute";
  pointerStyle.mixBlendMode = "difference";
  pointerStyle.transitionDuration = "100ms";
  pointerStyle.pointerEvents = "none";

  //Handle mouse events
  document.addEventListener("mousemove", (event) => {
    pointerStyle.transition = "0.2s";
    pointerStyle.transform = "scale(1)";
    pointerStyle.left = `${event.pageX - 30}px`;
    pointerStyle.top = `${event.pageY - 30}px`;
  });

  document.addEventListener("mouseleave", () => {
    pointerStyle.transition = "0.2s";
    pointerStyle.transform = "scale(0)";
  });
  console.log("Handle fired");
};

export default handlePointer;
