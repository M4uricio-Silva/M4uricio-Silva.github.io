        // --- DATA ARCHITECTURE ---
        const PROJECTS = [
            {
                title: "Vortex Digital",
                image: "imagens/projeto_vortex_digital.png",
                description: "Website Institucional & UX Moderno construído com alta performance e Tailwind CSS.",
                site: "projeto_vortex_digital.html",
                github: "https://github.com/M4uricio-Silva/M4uricio-Silva.github.io/blob/main/projeto_vortex_digital.html"
            },
            {
                title: "Math ENEM",
                image: "imagens/projeto_matematica.png",
                description: "Plataforma interativa educacional focada em revisão de matemática com JS puro.",
                site: "projeto_matematica.html",
                github: "https://github.com/M4uricio-Silva/M4uricio-Silva.github.io/blob/main/projeto_matematica.html"
            },
            {
                title: "Gym Kaiser",
                image: "imagens/projeto_gym_kaiser.png",
                description: "PWA para registro de treinos com banco de dados local (IndexedDB) e backup.",
                site: "projeto_gym.html",
                github: "https://github.com/M4uricio-Silva/M4uricio-Silva.github.io/blob/main/projeto_gym.html"
            }
        ];

        const SOCIAL_LINKS = [
            { label: "WHATSAPP", url: "https://wa.me/5584999465017" },
            { label: "E-MAIL", url: "mailto:mauriciosilvafariasbr@email.com" },
            { label: "GITHUB", url: "https://github.com/M4uricio-Silva" },
            { label: "LINKEDIN", url: "https://www.linkedin.com/in/mauricio-silva-9201942a5" },
            { label: "INSTAGRAM", url: "https://www.instagram.com/_zak._/" }
        ];

        // --- CURSOR CUSTOMIZADO ---
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
        initHoverEffects();

        // --- LOADER ---
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

        // --- TYPING EFFECT ---
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

        // --- SISTEMA DE ROTEAMENTO (MENU E SEÇÕES) ---
        let menuOpen = false;

        function toggleMenu() {
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

        // Banco de dados de conteúdo gerado dinamicamente
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

        function openSection(id) {
            toggleMenu();

            setTimeout(() => {
                const contentOverlay = document.getElementById("content-overlay");
                const dynamicContent = document.getElementById("dynamic-content");

                // Reseta o scroll para o topo sempre que abrir uma nova aba
                dynamicContent.scrollTop = 0;

                dynamicContent.innerHTML = sectionsData[id];
                contentOverlay.classList.add("overlay-active");
                initHoverEffects();

                gsap.to(contentOverlay, { opacity: 1, duration: 0.5, ease: "power3.out" });
                gsap.to(dynamicContent, { y: 0, opacity: 1, duration: 0.8, delay: 0.2, ease: "power3.out" });
            }, 600);
        }

        function closeContent() {
            const contentOverlay = document.getElementById("content-overlay");
            const dynamicContent = document.getElementById("dynamic-content");

            gsap.to(dynamicContent, { y: 30, opacity: 0, duration: 0.4, ease: "power3.in" });
            gsap.to(contentOverlay, {
                opacity: 0, duration: 0.5, delay: 0.2, ease: "power3.in", onComplete: () => {
                    contentOverlay.classList.remove("overlay-active");
                }
            });
        }

        // --- THREE.JS ENGINE ---
        const scene = new THREE.Scene();
        scene.fog = new THREE.FogExp2(0x050505, 0.15);
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.z = 5;

        const renderer = new THREE.WebGLRenderer({ canvas: document.querySelector("#core"), alpha: true, antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

        let currentGeometryMesh;

        function createParticles() {
            const geo = new THREE.BufferGeometry();
            let pos = [];
            for (let i = 0; i < 3000; i++) {
                let r = Math.random() * 2.5, theta = Math.random() * 2 * Math.PI, phi = Math.acos(Math.random() * 2 - 1);
                pos.push(r * Math.sin(phi) * Math.cos(theta) * 3, r * Math.sin(phi) * Math.sin(theta) * 3, r * Math.cos(phi) * 3);
            }
            geo.setAttribute("position", new THREE.Float32BufferAttribute(pos, 3));
            const mat = new THREE.PointsMaterial({ size: 0.015, color: 0xffffff, transparent: true, opacity: 0.5 });
            currentGeometryMesh = new THREE.Points(geo, mat);
            scene.add(currentGeometryMesh);
        }

        function createGrid() {
            const geo = new THREE.PlaneGeometry(20, 20, 40, 40);
            const pos = geo.attributes.position;
            for (let i = 0; i < pos.count; i++) {
                pos.setZ(i, Math.random() * 0.5);
            }
            const mat = new THREE.MeshBasicMaterial({ color: 0x333333, wireframe: true, transparent: true, opacity: 0.3 });
            currentGeometryMesh = new THREE.Mesh(geo, mat);
            currentGeometryMesh.rotation.x = -Math.PI / 2;
            currentGeometryMesh.position.y = -2;
            scene.add(currentGeometryMesh);
        }

        function createCore() {
            const geo = new THREE.IcosahedronGeometry(2, 1);
            const mat = new THREE.MeshBasicMaterial({ color: 0x555555, wireframe: true, transparent: true, opacity: 0.4 });
            currentGeometryMesh = new THREE.Mesh(geo, mat);
            scene.add(currentGeometryMesh);
        }

        createParticles();

        let mouseX = 0, mouseY = 0, targetX = 0, targetY = 0;
        const windowHalfX = window.innerWidth / 2, windowHalfY = window.innerHeight / 2;
        document.addEventListener('mousemove', (event) => {
            mouseX = (event.clientX - windowHalfX);
            mouseY = (event.clientY - windowHalfY);
        });

        function animate() {
            requestAnimationFrame(animate);
            if (currentGeometryMesh) {
                currentGeometryMesh.rotation.y += 0.001;
                currentGeometryMesh.rotation.x += 0.0005;
            }
            targetX = mouseX * 0.001;
            targetY = mouseY * 0.001;
            camera.position.x += (targetX - camera.position.x) * 0.05;
            camera.position.y += (-targetY - camera.position.y) * 0.05;
            camera.lookAt(scene.position);
            renderer.render(scene, camera);
        }
        animate();

        window.addEventListener('resize', () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        });

        // --- SISTEMA DE TROCA DE AMBIENTE ---
        let currentEnvironment = 0;
        const totalEnvironments = 3;

        function changeEnvironment() {
            gsap.to(currentGeometryMesh.material, {
                opacity: 0, duration: 0.5, onComplete: () => {
                    scene.remove(currentGeometryMesh);
                    currentGeometryMesh.geometry.dispose();
                    currentGeometryMesh.material.dispose();

                    currentEnvironment = (currentEnvironment + 1) % totalEnvironments;
                    const nameContainer = document.getElementById("name-container");
                    const terminal = document.getElementById("terminal");

                    nameContainer.className = "text-center";

                    if (currentEnvironment === 0) {
                        createParticles();
                        nameContainer.classList.add("name-style-0");
                        terminal.innerHTML += "<p>> sys: restored default environment</p>";
                    } else if (currentEnvironment === 1) {
                        createGrid();
                        nameContainer.classList.add("name-style-1");
                        terminal.innerHTML += "<p>> sys: topographical mesh initiated</p>";
                    } else if (currentEnvironment === 2) {
                        createCore();
                        nameContainer.classList.add("name-style-2");
                        terminal.innerHTML += "<p>> sys: geometric core isolated</p>";
                    }

                    // AUTO-SCROLL DO TERMINAL PARA A ÚLTIMA LINHA
                    terminal.scrollTop = terminal.scrollHeight;

                    currentGeometryMesh.material.opacity = 0;
                    gsap.to(currentGeometryMesh.material, { opacity: 0.5, duration: 1 });
                }
            });

            gsap.fromTo(event.target, { scale: 0.95 }, { scale: 1, duration: 0.4, ease: "back.out(1.7)" });
        }