import { PROJECTS, SOCIAL_LINKS } from '../data/content.js';
import { initWebGL, handleEnvironmentChange } from './webgl.js';

// --- INICIALIZAÇÃO ---
document.addEventListener("DOMContentLoaded", () => {
    initWebGL();
    initCursor();
    initLoader();
    initTyping();
});

// --- CURSOR CUSTOMIZADO ---
function initCursor() {
    const cursor = document.querySelector(".cursor");
    document.addEventListener("mousemove", (e) => {
        gsap.to(cursor, { x: e.clientX, y: e.clientY, duration: 0.1, ease: "power2.out" });
    });

    function initHoverEffects() {
        document.querySelectorAll('button, a, .hover-target').forEach(el => {
            el.addEventListener('mouseenter', () => cursor.classList.add('hover-effect'));
            el.addEventListener('mouseleave', () => cursor.classList.remove('hover-effect'));
        });
    }
    // Exporta para ser chamado novamente quando as abas abrirem
    window.initHoverEffects = initHoverEffects;
    initHoverEffects();
}

// --- LOADER ---
function initLoader() {
    let progress = 0;
    let load = setInterval(() => {
        progress += Math.floor(Math.random() * 20) + 5;
        if (progress > 100) progress = 100;
        document.querySelector(".loader-progress").style.width = progress + "%";
        if (progress >= 100) {
            clearInterval(load);
            gsap.to("#loader", {
                opacity: 0, duration: 1, delay: 0.2, ease: "power2.inOut",
                onComplete: () => document.querySelector("#loader").style.display = 'none'
            });
        }
    }, 120);
}

// --- TYPING EFFECT ---
function initTyping() {
    const words = [
        "Transformando lógica em interfaces reais.",
        "Foco no mercado de serviços digitais.",
        "Minimalismo & Performance."
    ];
    let wi = 0, ci = 0, isDeleting = false;

    function type() {
        const currentWord = words[wi];
        const typingElement = document.getElementById("typing");

        if (isDeleting) {
            typingElement.innerHTML = currentWord.substring(0, ci - 1);
            ci--;
        } else {
            typingElement.innerHTML = currentWord.substring(0, ci + 1);
            ci++;
        }

        let typeSpeed = isDeleting ? 20 : 60;
        if (!isDeleting && ci === currentWord.length) {
            typeSpeed = 2500;
            isDeleting = true;
        } else if (isDeleting && ci === 0) {
            isDeleting = false;
            wi = (wi + 1) % words.length;
            typeSpeed = 500;
        }
        setTimeout(type, typeSpeed);
    }
    type();
}

// --- GERAÇÃO DE CONTEÚDO DINÂMICO ---
const sectionsData = {
    about: `
        <div class="pb-20">
            <p class="text-gray-500 tracking-[.5em] text-sm mb-6 uppercase">01 — O PROPÓSITO</p>
            <h2 class="text-4xl md:text-6xl font-black leading-tight mb-8">Antes do código,<br>existe a estratégia.</h2>
            <p class="text-lg text-gray-400 leading-relaxed mb-6">Sou graduando em Administração e Programador Web. Essa combinação me permite entender não apenas o código, mas como um projeto deve se comportar para gerar conversão e autoridade.</p>
            <p class="text-lg text-gray-400 leading-relaxed">Atuo no mercado combinando desenvolvimento front-end moderno, suporte administrativo e design prático. O código constrói. O design comunica. A versatilidade resolve problemas.</p>
        </div>
    `,
    projects: `
        <div class="pb-20 pt-8">
            <p class="text-gray-500 tracking-[.5em] text-sm mb-6 uppercase">02 — PROJECT ARCHIVE</p>
            <div class="grid md:grid-cols-2 gap-6">
                ${PROJECTS.map(p => `
                    <div class="border border-gray-800 rounded-xl overflow-hidden hover:border-gray-500 transition-colors bg-black/40 group flex flex-col">
                        <div class="h-48 w-full overflow-hidden bg-gray-900">
                            <img src="${p.image}" alt="${p.title}" class="w-full h-full object-cover opacity-50 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700">
                        </div>
                        <div class="p-6 flex flex-col flex-grow">
                            <h3 class="text-2xl font-bold text-white mb-2">${p.title}</h3>
                            <p class="text-gray-400 text-sm mb-6 flex-grow">${p.description}</p>
                            <div class="flex gap-3 mt-auto">
                                <a href="${p.site}" target="_blank" class="hover-target text-xs font-mono border border-gray-700 px-4 py-2 rounded-full hover:bg-white hover:text-black transition">LIVE_SITE</a>
                                <a href="${p.github}" target="_blank" class="hover-target text-xs font-mono border border-gray-700 px-4 py-2 rounded-full hover:bg-white hover:text-black transition">SOURCE_CODE</a>
                            </div>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `,
    stack: `
        <div class="pb-20">
            <p class="text-gray-500 tracking-[.5em] text-sm mb-6 uppercase">03 — CREATOR SYSTEM</p>
            <h2 class="text-4xl md:text-5xl font-black leading-tight mb-10">Stack & Tools</h2>
            <div class="grid md:grid-cols-2 gap-12">
                <div>
                    <h3 class="text-xl font-bold text-white mb-4 border-b border-gray-800 pb-3">DEVELOPMENT</h3>
                    <ul class="text-gray-400 space-y-3 font-mono text-sm">
                        <li>> HTML5 / Semantic CSS</li>
                        <li>> Tailwind CSS</li>
                        <li>> JavaScript Moderno (ES6+)</li>
                        <li>> GSAP & Three.js</li>
                    </ul>
                </div>
                <div>
                    <h3 class="text-xl font-bold text-white mb-4 border-b border-gray-800 pb-3">SERVICES</h3>
                    <ul class="text-gray-400 space-y-3 font-mono text-sm">
                        <li>> Suporte Administrativo</li>
                        <li>> Estratégia UX/UI</li>
                        <li>> Edição Visual Básica</li>
                        <li>> Posicionamento Freelance</li>
                    </ul>
                </div>
            </div>
        </div>
    `,
    contact: `
        <div class="pb-20">
            <p class="text-gray-500 tracking-[.5em] text-sm mb-6 uppercase">04 — SYSTEM LINK</p>
            <h2 class="text-4xl md:text-6xl font-black leading-tight mb-12">Iniciar Protocolo<br>de Contato.</h2>
            <div class="flex flex-col gap-6 font-mono text-lg md:text-xl">
                ${SOCIAL_LINKS.map(link => `
                    <a href="${link.url}" target="_blank" class="hover-target text-gray-400 hover:text-white transition-colors w-max relative group">
                        [ <span class="group-hover:tracking-widest transition-all duration-300">${link.label}</span> ]
                    </a>
                `).join('')}
            </div>
        </div>
    `
};

// --- ROTEAMENTO E EXPORTAÇÃO GLOBAL (Para o HTML acessar) ---
let menuOpen = false;

window.toggleMenu = function () {
    menuOpen = !menuOpen;
    const menu = document.getElementById("menu-overlay");
    if (menuOpen) {
        menu.classList.add("overlay-active");
        gsap.to(menu, { opacity: 1, duration: 0.5, ease: "power3.out" });
        gsap.fromTo(".menu-link", { y: 30, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.1, duration: 0.6, delay: 0.2, ease: "power3.out" });
    } else {
        menu.classList.remove("overlay-active");
        gsap.to(menu, { opacity: 0, duration: 0.5, ease: "power3.in" });
    }
}

window.openSection = function (id) {
    window.toggleMenu();

    setTimeout(() => {
        const contentOverlay = document.getElementById("content-overlay");
        const dynamicContent = document.getElementById("dynamic-content");

        dynamicContent.scrollTop = 0;
        dynamicContent.innerHTML = sectionsData[id];
        contentOverlay.classList.add("overlay-active");

        if (window.initHoverEffects) window.initHoverEffects();

        gsap.to(contentOverlay, { opacity: 1, duration: 0.5, ease: "power3.out" });
        gsap.to(dynamicContent, { y: 0, opacity: 1, duration: 0.8, delay: 0.2, ease: "power3.out" });
    }, 600);
}

window.closeContent = function () {
    const contentOverlay = document.getElementById("content-overlay");
    const dynamicContent = document.getElementById("dynamic-content");

    gsap.to(dynamicContent, { y: 30, opacity: 0, duration: 0.4, ease: "power3.in" });
    gsap.to(contentOverlay, {
        opacity: 0, duration: 0.5, delay: 0.2, ease: "power3.in", onComplete: () => {
            contentOverlay.classList.remove("overlay-active");
        }
    });
}

window.changeEnvironment = function () {
    handleEnvironmentChange(event);
}