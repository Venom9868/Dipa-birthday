// Confetti effect on button click
function triggerConfetti() {
    // Trigger the confetti animation
    const duration = 5 * 1000; // duration in ms
    const end = Date.now() + duration;

    (function frame() {
        confetti({
            particleCount: 50,
            angle: Math.random() * 360,
            spread: Math.random() * 100 + 50,
            origin: { x: Math.random(), y: Math.random() }
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    })();
}