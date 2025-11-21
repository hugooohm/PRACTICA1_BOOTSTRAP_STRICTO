// Inicializar AOS
AOS.init({
  duration: 700,
  easing: "ease-out-quart",
  once: true
});

// NEWSLETTER HOME
const $newsletterForm = $("#newsletter-form");

if ($newsletterForm.length) {
  $newsletterForm.on("submit", function (e) {
    e.preventDefault();

    $("#newsletter-feedback")
      .removeClass("d-none")
      .text("Te has suscrito a la newsletter.");

    this.reset();
  });

// ========== ANIMACIÓN SCROLL 3D EN COLECCION ==========
  const frameElement = document.getElementById("frame-sequence");

  // Solo ejecutar en coleccion.html (donde existe #frame-sequence)
  if (frameElement && typeof gsap !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);

    const frameCount = 78; // de 00 a 77 -> 78 frames

    // Función que devuelve la ruta correcta
    const currentFrame = (index) =>
      `media/img/rotacioncamiseta/video cami blanca${String(index).padStart(2, "0")}.png`;
      // si son JPG: cambia .png por .jpg

    // Pre-carga básica
    const images = [];
    for (let i = 0; i < frameCount; i++) {
      const img = new Image();
      img.src = currentFrame(i);
      images.push(img);
    }

    const animationState = { frame: 0 };

    gsap.to(animationState, {
      frame: frameCount - 1,
      snap: "frame",
      ease: "none",
      scrollTrigger: {
        trigger: "#collection-hero",
        start: "top top",
        end: "+=2000",
        scrub: 1,
        pin: true
      },
      onUpdate: () => {
        const frameIndex = Math.round(animationState.frame);
        frameElement.src = currentFrame(frameIndex);
      } 
    });
  }
};