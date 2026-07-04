// O THREE já é carregado via CDN no HTML, então ele existe globalmente.
const scene = new THREE.Scene();
scene.fog = new THREE.FogExp2(0x050505, 0.15);
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

let renderer;
let currentGeometryMesh;
let currentEnvironment = 0;
const totalEnvironments = 3;

let mouseX = 0, mouseY = 0, targetX = 0, targetY = 0;
const windowHalfX = window.innerWidth / 2;
const windowHalfY = window.innerHeight / 2;

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

export function initWebGL() {
    renderer = new THREE.WebGLRenderer({ canvas: document.querySelector("#core"), alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    createParticles();

    document.addEventListener('mousemove', (event) => {
        mouseX = (event.clientX - windowHalfX);
        mouseY = (event.clientY - windowHalfY);
    });

    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });

    animate();
}

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

export function handleEnvironmentChange(event) {
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

            terminal.scrollTop = terminal.scrollHeight;
            currentGeometryMesh.material.opacity = 0;
            gsap.to(currentGeometryMesh.material, { opacity: 0.5, duration: 1 });
        }
    });

    if (event) {
        gsap.fromTo(event.target, { scale: 0.95 }, { scale: 1, duration: 0.4, ease: "back.out(1.7)" });
    }
}