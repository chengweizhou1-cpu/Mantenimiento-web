// Menú hamburguesa para móvil
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

if (burger) {
    burger.addEventListener('click', () => {
        navLinks.classList.toggle('show');
    });
}

// Botón "Volver arriba"
const btnTop = document.getElementById('btnTop');
if (btnTop) {
    btnTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// Mostrar/ocultar contenido adicional (toggle)
const toggleBtns = document.querySelectorAll('.toggle-btn');
toggleBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        const hiddenDiv = btn.nextElementSibling;
        if (hiddenDiv && hiddenDiv.classList.contains('hidden-content')) {
            hiddenDiv.classList.toggle('show');
            btn.textContent = hiddenDiv.classList.contains('show') ? '➖ Ocultar' : '➕ Mostrar pasos';
        }
    });
});

// Cerrar menú móvil al hacer clic en un enlace
const navItems = document.querySelectorAll('.nav-links a');
navItems.forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            navLinks.classList.remove('show');
        }
    });
});