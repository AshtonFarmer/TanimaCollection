document.querySelectorAll('.universe-card, .sub-card').forEach(card => {
  card.addEventListener('pointermove', event => {
    const rect = card.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width - .5) * 10;
    const y = ((event.clientY - rect.top) / rect.height - .5) * -10;
    card.style.transform = `translateY(-6px) rotateX(${y}deg) rotateY(${x}deg)`;
  });

  card.addEventListener('pointerleave', () => {
    card.style.transform = '';
  });
});
