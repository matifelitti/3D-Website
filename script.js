gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".card").forEach((card, index) => {
  gsap.from(card, {
    opacity: 0,
    y: 50,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: card,
      start: "top 80%",
      toggleActions: "play none none none",
    },
    delay: index * 0.2,
  });
});

document.querySelectorAll(".card").forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const deltaX = ((x - centerX) / centerX) * 10;
    const deltaY = ((centerY - y) / centerY) * 10;
    card.style.transform = `rotateY(${deltaX}deg) rotateX(${deltaY}deg) scale(1.05)`;
  });
  card.addEventListener("mouseleave", () => {
    card.style.transform = `rotateY(0deg) rotateX(0deg) scale(1)`;
  });
});
