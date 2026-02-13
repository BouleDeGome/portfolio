document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.createElement('canvas');
    canvas.id = 'particles-canvas';
    Object.assign(canvas.style, {
        position: 'fixed',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        zIndex: '-1', // Behind everything
        pointerEvents: 'none',
        opacity: '0.4'
    });
    document.body.prepend(canvas);

    const ctx = canvas.getContext('2d');
    let width, height;
    let particles = [];

    function resize() {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    }
    window.addEventListener('resize', resize);
    resize();

    class Particle {
        constructor() {
            this.reset(true);
        }

        reset(initial = false) {
            this.x = Math.random() * width;
            this.y = initial ? Math.random() * height : height + 10;
            this.vx = (Math.random() - 0.5) * 0.5; // Slow horizontal drift
            this.vy = -Math.random() * 0.5 - 0.1; // Slow upward float
            this.size = Math.random() * 2 + 1;
            this.alpha = Math.random() * 0.5 + 0.1;
            this.fade = (Math.random() * 0.01) + 0.005;

            // Randomly assign a color type: 0 = Cyan (Default), 1 = Dark Blue
            this.colorType = Math.random() > 0.3 ? 'cyan' : 'blue';
        }

        update() {
            this.x += this.vx;
            this.y += this.vy;
            this.alpha -= this.fade * 0.1;

            if (this.y < -10 || this.alpha <= 0) {
                this.reset();
            }
        }

        draw() {
            if (this.colorType === 'cyan') {
                ctx.fillStyle = `rgba(34, 211, 238, ${this.alpha})`; // Cyan-400
            } else {
                ctx.fillStyle = `rgba(30, 58, 138, ${this.alpha * 0.8})`; // Blue-900 (Dark Blue)
            }

            ctx.beginPath();
            ctx.arc(this.x, this.y, this.colorType === 'blue' ? this.size * 1.5 : this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    // Create particles
    const particleCount = 50;
    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
    }

    function animate() {
        ctx.clearRect(0, 0, width, height);
        particles.forEach(p => {
            p.update();
            p.draw();
        });
        requestAnimationFrame(animate);
    }
    animate();
});
