// script.js

document.addEventListener("DOMContentLoaded", function () {
    // --- Seletores Globais ---
    const menuToggle = document.querySelector('.menu-toggle');
    // Agora o menu off-canvas tem a classe 'off-canvas-menu'
    const offCanvasMenu = document.querySelector('.off-canvas-menu');
    const overlay = document.querySelector('.overlay');
    const mainContent = document.getElementById('content'); // Conteúdo principal para possível desfoque (opcional)

    // Seletores para os links dos menus
    const navLinksOffCanvas = document.querySelectorAll('.off-canvas-menu ul li a'); // Links do menu off-canvas
    const navLinksDesktop = document.querySelectorAll('.nav-desktop ul li a'); // Links do menu desktop


    // Função para abrir o menu off-canvas
    function openOffCanvasMenu() {
        if (offCanvasMenu && overlay) {
            offCanvasMenu.classList.add('active');
            overlay.classList.add('active');
            // Altera o ícone para 'x'
            const icon = menuToggle.querySelector('i');
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
            // Impede o scroll do body quando o menu está aberto
            document.body.style.overflow = 'hidden';
            // if (mainContent) mainContent.classList.add('blurred'); // Se for implementar o blur
        }
    }

    // Função para fechar o menu off-canvas
    function closeOffCanvasMenu() {
        if (offCanvasMenu && overlay) {
            offCanvasMenu.classList.remove('active');
            overlay.classList.remove('active');
            // Retorna o ícone para hambúrguer
            const icon = menuToggle.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
            // Permite o scroll do body
            document.body.style.overflow = '';
            // if (mainContent) mainContent.classList.remove('blurred'); // Se for implementar o blur
        }
    }

    // Evento de clique no botão hambúrguer
    if (menuToggle) {
        menuToggle.addEventListener('click', function () {
            if (offCanvasMenu.classList.contains('active')) {
                closeOffCanvasMenu();
            } else {
                openOffCanvasMenu();
            }
        });
    }

    // Evento de clique no overlay para fechar o menu
    if (overlay) {
        overlay.addEventListener('click', closeOffCanvasMenu);
    }

    // Fecha o menu off-canvas ao clicar em um link dentro dele
    navLinksOffCanvas.forEach(link => {
        link.addEventListener('click', closeOffCanvasMenu);
    });

    // --- Funcionalidade do Botão Voltar ao Topo ---
    const backToTopBtn = document.getElementById("backToTopBtn");

    if (backToTopBtn) {
        window.onscroll = () => {
            backToTopBtn.style.display = (document.documentElement.scrollTop > 20 || document.body.scrollTop > 20) ? "block" : "none";
        };

        backToTopBtn.onclick = () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        };
    }

    // --- Ano Atual no Footer ---
    const currentYearSpan = document.getElementById("current-year");
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    // --- Ativação de Links da Navegação ao Scroll (Scrollspy) ---
    const sections = document.querySelectorAll("main section");
    const header = document.querySelector("header");
    // Usamos uma pequena margem para garantir que a ativação ocorra antes de a seção tocar o topo exato
    const scrollOffset = 70; // Ajuste este valor se o header tiver altura diferente ou se preferir outro comportamento

    function activateNavLink() {
        let currentActiveSectionId = "";

        // Pega a altura do header dinamicamente para o cálculo do scroll
        const headerHeight = header ? header.offsetHeight : 0;

        sections.forEach(section => {
            // Calcula a posição do topo da seção considerando a altura do header fixo e um pequeno offset
            const sectionTop = section.offsetTop - headerHeight - scrollOffset;
            const sectionBottom = sectionTop + section.offsetHeight;

            if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
                currentActiveSectionId = section.getAttribute("id");
            }
        });

        // Desativa 'active' de todos os links e reativa no link da seção atual
        [...navLinksOffCanvas, ...navLinksDesktop].forEach(link => {
            link.classList.remove("active");
            // Verifica se o href do link corresponde ao ID da seção ativa
            if (currentActiveSectionId && link.getAttribute("href") === `#${currentActiveSectionId}`) {
                link.classList.add("active");
            }
        });
    }

    // Adiciona o evento de scroll
    window.addEventListener("scroll", activateNavLink);
    // Chama a função uma vez ao carregar a página para ativar a seção inicial (ex: #hero)
    activateNavLink();


    // --- Opcional: Funcionalidade para o botão de troca (toggle-switch-icon) ---
    const toggleSwitchIcon = document.querySelector('.toggle-switch-icon');
    if (toggleSwitchIcon) {
        toggleSwitchIcon.addEventListener('click', function () {
            alert('Botão de troca clicado! Aqui você pode implementar a troca de tema (Dark Mode/Light Mode), por exemplo.');
            // Exemplo de como você poderia alternar uma classe no body para dark mode
            // document.body.classList.toggle('dark-mode');
        });
    }

    // --- Fechar o menu off-canvas se a tela for redimensionada para desktop ---
    // Isso é útil caso o usuário redimensione a janela enquanto o menu está aberto
    window.addEventListener('resize', function () {
        if (window.innerWidth > 992 && offCanvasMenu.classList.contains('active')) {
            closeOffCanvasMenu();
        }
    });

});