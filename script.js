document.addEventListener("DOMContentLoaded", () => {
    const botonSorpresa = document.getElementById("botonSorpresa");
    const sorpresaOverlay = document.getElementById("sorpresaOverlay");
    const cerrarSorpresa = document.getElementById("cerrarSorpresa");

    // 1. Abrir Modal y disparar lluvia masiva de corazones
    botonSorpresa.addEventListener("click", () => {
        sorpresaOverlay.style.display = "flex";
        // Disparar 200 corazones para que sea bien intenso
        for (let i = 0; i < 200; i++) {
            setTimeout(generarGranExplosionDeCorazones, i * 20);
        }
    });

    // 2. Cerrar Modal
    cerrarSorpresa.addEventListener("click", () => {
        sorpresaOverlay.style.display = "none";
    });

    sorpresaOverlay.addEventListener("click", (e) => {
        if (e.target === sorpresaOverlay) {
            sorpresaOverlay.style.display = "none";
        }
    });

    // 3. Rotación de las polaroids
    const polaroids = document.querySelectorAll(".galeria.polaroid");
    polaroids.forEach((polaroid) => {
        const angulo = (Math.random() - 0.5) * 16;
        polaroid.style.transform = `rotate(${angulo}deg)`;
    });

    // 4. Llenar los espacios vacíos con corazones fijos (Aumentado a 80)
    for (let i = 0; i < 80; i++) {
        const corazon = document.createElement("div");
        const tiposCorazones = ["💖", "❤️", "💝", "🌸", "💕"];
        corazon.innerText = tiposCorazones[Math.floor(Math.random() * tiposCorazones.length)];
        
        corazon.style.position = "fixed";
        corazon.style.left = `${Math.random() * 100}vw`;
        corazon.style.top = `${Math.random() * 100}vh`;
        corazon.style.fontSize = `${Math.random() * 30 + 10}px`;
        corazon.style.opacity = "0.3";
        corazon.style.zIndex = "-1"; // Detrás de todo
        corazon.style.pointerEvents = "none";
        document.body.appendChild(corazon);
    }
});

// FUNCIÓN DE LLUVIA (Se mantiene fuera para ser llamada por el botón)
function generarGranExplosionDeCorazones() {
    const corazon = document.createElement("div");
    const tiposCorazones = ["💖", "❤️", "💝", "🌸", "💕", "❤"];
    corazon.innerText = tiposCorazones[Math.floor(Math.random() * tiposCorazones.length)];
    
    corazon.style.position = "fixed";
    corazon.style.left = `${Math.random() * 100}vw`;
    corazon.style.bottom = "-50px";
    
    const tamano = Math.random() * 45 + 15;
    corazon.style.fontSize = `${tamano}px`;
    
    corazon.style.zIndex = "2000"; 
    corazon.style.opacity = Math.random() * 0.7 + 0.3;
    corazon.style.pointerEvents = "none";
    
    const duracion = Math.random() * 3 + 3;
    corazon.style.transition = `all ${duracion}s linear`;
    
    document.body.appendChild(corazon);

    setTimeout(() => {
        const desplazamientoX = (Math.random() - 0.5) * 400;
        const rotacion = Math.random() * 360;
        corazon.style.transform = `translateY(-110vh) translateX(${desplazamientoX}px) rotate(${rotacion}deg)`;
        corazon.style.opacity = "0";
    }, 40);

    setTimeout(() => {
        corazon.remove();
    }, duracion * 1000);
}