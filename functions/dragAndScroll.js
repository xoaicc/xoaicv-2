function dragScrollCarousel(carousel) {
  let isDragging = false;
  let startX = 0;
  let scrollLeft = 0;

  // Start dragging
  carousel.addEventListener("pointerdown", (e) => {
    isDragging = true;
    startX = e.clientX; // Capture the starting X position
    scrollLeft = carousel.scrollLeft; // Capture the scroll position
    carousel.style.cursor = "grabbing"; // Change cursor style
    carousel.style.scrollBehavior = "auto"; // Disable smooth scroll during drag
    carousel.setPointerCapture(e.pointerId); // Capture the pointer for the element
  });

  // Stop dragging
  carousel.addEventListener("pointerup", () => {
    isDragging = false;
    carousel.style.cursor = "grab";
    carousel.style.scrollBehavior = "smooth"; // Re-enable smooth scroll after dragging
  });

  // Handle leaving the element
  carousel.addEventListener("pointerleave", () => {
    if (!isDragging) return;
    isDragging = false;
    carousel.style.cursor = "grab";
    carousel.style.scrollBehavior = "smooth";
  });

  // Dragging the carousel
  carousel.addEventListener("pointermove", (e) => {
    if (!isDragging) return;
    e.preventDefault();

    const x = e.clientX; // Get current X position of the pointer
    const walk = x - startX; // Calculate distance moved by the pointer
    carousel.scrollLeft = scrollLeft - walk; // Scroll the carousel by the distance moved
  });
}

const carouselElement = document.querySelector(".carousel-inner");
dragScrollCarousel(carouselElement);
