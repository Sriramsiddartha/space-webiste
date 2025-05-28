// Planet data with relative sizes
const planetData = {
    sun: {
        name: "Sun",
        radius: 15,
        texture: "https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/sun.jpg",
        description: "The Sun is the star at the center of the Solar System. It is a nearly perfect sphere of hot plasma, with internal convective motion that generates a magnetic field.",
        diameter: "1,392,700 km",
        distance: "0 AU",
        orbitalPeriod: "N/A",
        temperature: "5,778 K"
    },
    mercury: {
        name: "Mercury",
        radius: 1.5,
        texture: "https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/mercury.jpg",
        description: "Mercury is the smallest and innermost planet in the Solar System. Its orbital period around the Sun is 87.97 days, the shortest of all the planets.",
        diameter: "4,879 km",
        distance: "0.4 AU",
        orbitalPeriod: "88 days",
        temperature: "-180°C to 430°C"
    },
    venus: {
        name: "Venus",
        radius: 2.5,
        texture: "https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/venus.jpg",
        description: "Venus is the second planet from the Sun and is Earth's closest planetary neighbor. It's one of the four inner, terrestrial planets.",
        diameter: "12,104 km",
        distance: "0.7 AU",
        orbitalPeriod: "225 days",
        temperature: "462°C"
    },
    earth: {
        name: "Earth",
        radius: 3,
        texture: "https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth.jpg",
        description: "Earth is the third planet from the Sun and the only astronomical object known to harbor life. About 71% of Earth's surface is covered with water.",
        diameter: "12,742 km",
        distance: "1 AU",
        orbitalPeriod: "365 days",
        temperature: "-88°C to 58°C"
    },
    mars: {
        name: "Mars",
        radius: 2,
        texture: "https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/mars.jpg",
        description: "Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System. It's often called the 'Red Planet' due to its reddish appearance.",
        diameter: "6,779 km",
        distance: "1.5 AU",
        orbitalPeriod: "687 days",
        temperature: "-140°C to 20°C"
    },
    jupiter: {
        name: "Jupiter",
        radius: 8,
        texture: "https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/jupiter.jpg",
        description: "Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass more than two and a half times that of all the other planets combined.",
        diameter: "139,820 km",
        distance: "5.2 AU",
        orbitalPeriod: "4,333 days",
        temperature: "-110°C"
    },
    saturn: {
        name: "Saturn",
        radius: 7,
        texture: "https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/saturn.jpg",
        description: "Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is known for its prominent ring system.",
        diameter: "116,460 km",
        distance: "9.5 AU",
        orbitalPeriod: "10,759 days",
        temperature: "-178°C"
    },
    uranus: {
        name: "Uranus",
        radius: 5,
        texture: "https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/uranus.jpg",
        description: "Uranus is the seventh planet from the Sun. Its name is a reference to the Greek god of the sky, Uranus, who, according to Greek mythology, was the great-grandfather of Ares.",
        diameter: "50,724 km",
        distance: "19.8 AU",
        orbitalPeriod: "30,687 days",
        temperature: "-224°C"
    },
    neptune: {
        name: "Neptune",
        radius: 5,
        texture: "https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/neptune.jpg",
        description: "Neptune is the eighth and farthest-known Solar planet from the Sun. In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet.",
        diameter: "49,244 km",
        distance: "30.1 AU",
        orbitalPeriod: "60,190 days",
        temperature: "-214°C"
    }
};

// Three.js setup
let scene, camera, renderer, planets = {};
let raycaster = new THREE.Raycaster();
let mouse = new THREE.Vector2();

function init() {
    // Scene setup
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000);
    
    // Camera setup
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 80;
    
    // Renderer setup
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    document.getElementById('solar-system-canvas').appendChild(renderer.domElement);
    
    // Add stars
    createStars();
    
    // Lighting
    const ambientLight = new THREE.AmbientLight(0x333333);
    scene.add(ambientLight);
    
    const sunLight = new THREE.PointLight(0xffffff, 2, 300);
    scene.add(sunLight);
    
    // Create planets
    createPlanets();
    
    // Add Saturn's rings
    createSaturnRings();
    
    // Event listeners
    window.addEventListener('resize', onWindowResize);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('click', onMouseClick);
    
    // Start animation
    animate();
}

function createStars() {
    const starGeometry = new THREE.BufferGeometry();
    const starMaterial = new THREE.PointsMaterial({
        color: 0xFFFFFF,
        size: 0.2,
        transparent: true
    });

    const starVertices = [];
    for (let i = 0; i < 2000; i++) {
        const x = (Math.random() - 0.5) * 2000;
        const y = (Math.random() - 0.5) * 2000;
        const z = (Math.random() - 0.5) * 2000;
        starVertices.push(x, y, z);
    }

    starGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starVertices, 3));
    const starField = new THREE.Points(starGeometry, starMaterial);
    scene.add(starField);
}

function createPlanets() {
    const textureLoader = new THREE.TextureLoader();
    
    // Create Sun
    const sunGeometry = new THREE.SphereGeometry(planetData.sun.radius, 32, 32);
    const sunTexture = textureLoader.load(planetData.sun.texture);
    const sunMaterial = new THREE.MeshBasicMaterial({ 
        map: sunTexture,
        emissive: 0xffff00,
        emissiveIntensity: 0.8
    });
    const sun = new THREE.Mesh(sunGeometry, sunMaterial);
    sun.position.x = -60; // Position sun on the left
    scene.add(sun);
    planets.sun = sun;
    
    // Create other planets
    let xPosition = -30; // Start position for planets
    Object.keys(planetData).forEach(planet => {
        if (planet === 'sun') return;
        
        const data = planetData[planet];
        const geometry = new THREE.SphereGeometry(data.radius, 32, 32);
        const texture = textureLoader.load(data.texture);
        const material = new THREE.MeshPhongMaterial({ 
            map: texture,
            shininess: 10,
            specular: 0x666666
        });
        const mesh = new THREE.Mesh(geometry, material);
        
        // Position planets horizontally
        mesh.position.x = xPosition;
        xPosition += 10; // Space between planets
        
        scene.add(mesh);
        planets[planet] = mesh;
    });
}

function createSaturnRings() {
    const ringGeometry = new THREE.RingGeometry(8, 12, 32);
    const ringMaterial = new THREE.MeshBasicMaterial({
        color: 0xFFFFFF,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.7
    });
    const rings = new THREE.Mesh(ringGeometry, ringMaterial);
    rings.rotation.x = Math.PI / 2;
    planets.saturn.add(rings);
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

function onMouseMove(event) {
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
}

function onMouseClick() {
    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(Object.values(planets));
    
    if (intersects.length > 0) {
        const planet = intersects[0].object;
        const planetName = Object.keys(planets).find(key => planets[key] === planet);
        showPlanetInfo(planetName);
    }
}

function showPlanetInfo(planetName) {
    const data = planetData[planetName];
    const infoPanel = document.getElementById('planet-info');
    
    // Update planet info
    document.querySelector('.planet-name').textContent = data.name;
    document.querySelector('.planet-description').textContent = data.description;
    document.querySelector('.planet-image').style.backgroundImage = `url(${data.texture})`;
    
    // Update stats
    const stats = document.querySelectorAll('.stat-value');
    stats[0].textContent = data.diameter;
    stats[1].textContent = data.distance;
    stats[2].textContent = data.orbitalPeriod;
    stats[3].textContent = data.temperature;
    
    // Show info panel
    infoPanel.classList.add('active');
}

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

// Initialize the solar system when the page loads
window.addEventListener('load', init); 