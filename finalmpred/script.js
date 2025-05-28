// Meteor shower data
const meteorShowers = [
    // Annual Showers
    { 
        name: "Lyrids", 
        radiant: "Lyra", 
        startMonth: 4, 
        startDay: 16, 
        endMonth: 4, 
        endDay: 22, 
        hemisphere: "Northern", 
        preferredHemisphere: "Northern",
        type: "Annual",
        description: "One of the oldest recorded meteor showers, first documented by Chinese astronomers in 687 BC. Known for producing bright fireballs and occasional outbursts. The meteors originate from Comet Thatcher (C/1861 G1) and are famous for their fast, bright trails."
    },
    { 
        name: "Eta Aquarids", 
        radiant: "Aquarius", 
        startMonth: 4, 
        startDay: 19, 
        endMonth: 5, 
        endDay: 28, 
        hemisphere: "Northern, Southern", 
        preferredHemisphere: "Southern",
        type: "Annual",
        description: "Created by the famous Halley's Comet, these meteors are known for their exceptional speed (66 km/s) and long, glowing trails. Best viewed from the Southern Hemisphere, where observers can see up to 60 meteors per hour during peak activity."
    },
    { 
        name: "Orionids", 
        radiant: "Orion", 
        startMonth: 10, 
        startDay: 2, 
        endMonth: 11, 
        endDay: 7, 
        hemisphere: "Northern, Southern", 
        preferredHemisphere: "Both",
        type: "Annual",
        description: "Another gift from Halley's Comet, the Orionids are known for their bright, fast meteors that often leave persistent trains. They're particularly active between midnight and dawn, with peak rates of 20-25 meteors per hour."
    },
    { 
        name: "Perseids", 
        radiant: "Perseus", 
        startMonth: 7, 
        startDay: 17, 
        endMonth: 8, 
        endDay: 24, 
        hemisphere: "Northern", 
        preferredHemisphere: "Northern",
        type: "Annual",
        description: "The most popular meteor shower of the year, producing up to 100 meteors per hour at peak. Known for their bright, colorful meteors and frequent fireballs. Originates from Comet Swift-Tuttle, with records dating back to 36 AD."
    },
    { 
        name: "Leonids", 
        radiant: "Leo", 
        startMonth: 11, 
        startDay: 6, 
        endMonth: 11, 
        endDay: 30, 
        hemisphere: "Northern, Southern", 
        preferredHemisphere: "Both",
        type: "Annual",
        description: "Famous for producing meteor storms every 33 years, with the 1833 storm being particularly spectacular (100,000 meteors per hour). Regular rates are 15-20 meteors per hour, but the meteors are known for their exceptional speed and bright trails."
    },
    { 
        name: "Quadrantids", 
        radiant: "Boötes", 
        startMonth: 12, 
        startDay: 28, 
        endMonth: 1, 
        endDay: 12, 
        hemisphere: "Northern", 
        preferredHemisphere: "Northern",
        type: "Annual",
        description: "Known for their short but intense peak period (6 hours), producing up to 120 meteors per hour. The shower is unique for its origin from asteroid 2003 EH1, rather than a comet. Meteors are known for their blue color and bright fireballs."
    },
    { 
        name: "Delta Aquarids", 
        radiant: "Aquarius", 
        startMonth: 7, 
        startDay: 12, 
        endMonth: 8, 
        endDay: 23, 
        hemisphere: "Southern", 
        preferredHemisphere: "Southern",
        type: "Annual",
        description: "A long-running shower best viewed from the Southern Hemisphere, producing 15-20 meteors per hour. The meteors are known for their medium speed and yellow color. Their origin is still debated, possibly from Comet 96P/Machholz."
    },
    { 
        name: "Draconids", 
        radiant: "Draco", 
        startMonth: 10, 
        startDay: 6, 
        endMonth: 10, 
        endDay: 10, 
        hemisphere: "Northern", 
        preferredHemisphere: "Northern",
        type: "Annual",
        description: "Unique for being best viewed in the evening rather than early morning. Produces slow-moving meteors (21 km/s) that are often yellow or red in color. Known for occasional outbursts, with the 2011 storm producing 600 meteors per hour."
    },
    { 
        name: "Geminids", 
        radiant: "Gemini", 
        startMonth: 12, 
        startDay: 4, 
        endMonth: 12, 
        endDay: 17, 
        hemisphere: "Northern, Southern", 
        preferredHemisphere: "Both",
        type: "Annual",
        description: "One of the most reliable showers, producing up to 120 meteors per hour. Unique for originating from asteroid 3200 Phaethon rather than a comet. Known for their slow speed, bright colors, and frequent fireballs. First observed in 1862."
    },
    { 
        name: "Ursids", 
        radiant: "Ursa Minor", 
        startMonth: 12, 
        startDay: 17, 
        endMonth: 12, 
        endDay: 26, 
        hemisphere: "Northern", 
        preferredHemisphere: "Northern",
        type: "Annual",
        description: "A minor shower producing 5-10 meteors per hour, but known for occasional outbursts. The meteors are slow-moving and often appear in pairs. Associated with Comet 8P/Tuttle, with records dating back to 1945."
    },
    
    // Irregular Showers
    { 
        name: "Andromedids", 
        radiant: "Andromeda", 
        startMonth: 11, 
        startDay: 25, 
        endMonth: 12, 
        endDay: 6, 
        hemisphere: "Northern, Southern", 
        preferredHemisphere: "Both", 
        type: "Irregular",
        description: "Once one of the most spectacular showers, now much weaker. Associated with the breakup of Comet 3D/Biela in 1846. Last major outburst in 2011 produced 50 meteors per hour. Next predicted outburst in 2023-2024 could be significant."
    },
    { 
        name: "Alpha Monocerotids", 
        radiant: "Monoceros", 
        startMonth: 11, 
        startDay: 15, 
        endMonth: 11, 
        endDay: 25, 
        hemisphere: "Northern, Southern", 
        preferredHemisphere: "Both", 
        type: "Irregular",
        description: "Known for unpredictable outbursts every ~10 years. The 2019 outburst produced 400 meteors per hour. Meteors are fast-moving and often produce bright trails. Next major outburst predicted for 2029. Origin remains a mystery."
    },
    { 
        name: "Tau Herculids", 
        radiant: "Hercules", 
        startMonth: 5, 
        startDay: 19, 
        endMonth: 6, 
        endDay: 19, 
        hemisphere: "Northern, Southern", 
        preferredHemisphere: "Both", 
        type: "Irregular",
        description: "Associated with Comet 73P/Schwassmann-Wachmann, which has been breaking apart since 1995. The 2022 outburst was particularly spectacular, producing 1000+ meteors per hour. Next major outburst predicted for 2033."
    },
    { 
        name: "June Bootids", 
        radiant: "Bootes", 
        startMonth: 6, 
        startDay: 22, 
        endMonth: 7, 
        endDay: 2, 
        hemisphere: "Northern, Southern", 
        preferredHemisphere: "Both", 
        type: "Irregular",
        description: "Known for sudden, intense outbursts. The 2020 outburst produced 100+ meteors per hour. Meteors are slow-moving and often appear in clusters. Associated with Comet 7P/Pons-Winnecke. Next predicted outburst in 2024."
    },
    { 
        name: "Aurigids", 
        radiant: "Auriga", 
        startMonth: 8, 
        startDay: 25, 
        endMonth: 9, 
        endDay: 8, 
        hemisphere: "Northern, Southern", 
        preferredHemisphere: "Both", 
        type: "Irregular",
        description: "A long-period shower associated with Comet Kiess. Known for producing bright, fast meteors and occasional outbursts. The 2019 outburst was particularly notable. Next major outburst predicted for 2027. Meteors often leave persistent trains."
    }
];

// Initialize meteor shower functionality
function initMeteorShower() {
    const yearSelect = document.getElementById('year');
    const monthSelect = document.getElementById('month');
    const daySelect = document.getElementById('day');
    const checkButton = document.getElementById('checkButton');
    const resultsDiv = document.getElementById('results');

    // Initialize with current date
    const today = new Date();
    const currentYear = today.getFullYear();

    // Populate year dropdown (1900 to current year + 10)
    for (let year = 1900; year <= currentYear + 10; year++) {
        const option = document.createElement('option');
        option.value = year;
        option.textContent = year;
        yearSelect.appendChild(option);
    }

    yearSelect.value = currentYear;
    monthSelect.value = today.getMonth() + 1;
    updateDays();
    daySelect.value = today.getDate();

    // Event Listeners
    yearSelect.addEventListener('change', updateDays);
    monthSelect.addEventListener('change', updateDays);
    checkButton.addEventListener('click', checkMeteorShowers);

    // Update days based on selected month and year
    function updateDays() {
        const year = parseInt(yearSelect.value);
        const month = parseInt(monthSelect.value);
        const daysInMonth = new Date(year, month, 0).getDate();
        
        daySelect.innerHTML = '';
        for (let i = 1; i <= daysInMonth; i++) {
            const option = document.createElement('option');
            option.value = i;
            option.textContent = i;
            daySelect.appendChild(option);
        }
    }

    // Check if a date falls within a meteor shower period
    function isDateInRange(date, shower) {
        const month = parseInt(monthSelect.value);
        const day = parseInt(daySelect.value);
        
        // Handle cross-year showers (like Quadrantids)
        if (shower.endMonth < shower.startMonth) {
            return (month > shower.startMonth || (month === shower.startMonth && day >= shower.startDay)) ||
                   (month < shower.endMonth || (month === shower.endMonth && day <= shower.endDay));
        }
        
        return (month > shower.startMonth || (month === shower.startMonth && day >= shower.startDay)) &&
               (month < shower.endMonth || (month === shower.endMonth && day <= shower.endDay));
    }

    // Check for meteor showers on selected date
    function checkMeteorShowers() {
        const year = parseInt(yearSelect.value);
        const month = parseInt(monthSelect.value);
        const day = parseInt(daySelect.value);
        const foundShowers = meteorShowers.filter(shower => isDateInRange({ year, month, day }, shower));
        
        let html = '';
        if (foundShowers.length > 0) {
            html = `<p>Found ${foundShowers.length} meteor shower(s) on ${month}/${day}/${year}:</p>`;
            foundShowers.forEach(shower => {
                html += `
                    <div class="meteor-shower">
                        <h3>🌠 ${shower.name}</h3>
                        <p>Type: ${shower.type}</p>
                        <p>Constellation: ${shower.radiant}</p>
                        <p>Visible in: ${shower.hemisphere}</p>
                        <p>Description: ${shower.description}</p>
                    </div>`;
            });
        } else {
            html = `
                <p>🚫 No meteor showers found on ${month}/${day}/${year}</p>
                <h3>🔮 Upcoming Meteor Showers:</h3>`;
            meteorShowers.forEach(shower => {
                html += `
                    <div class="meteor-shower">
                        <h3>⭐ ${shower.name}</h3>
                        <p>Type: ${shower.type}</p>
                        <p>Constellation: ${shower.radiant}</p>
                        <p>Period: ${shower.startMonth}/${shower.startDay} to ${shower.endMonth}/${shower.endDay}</p>
                        <p>Visible in: ${shower.hemisphere}</p>
                        <p>Description: ${shower.description}</p>
                    </div>`;
            });
        }
        
        resultsDiv.innerHTML = html;
    }

    // Initial check
    checkMeteorShowers();
}

// Initialize all functionality when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize drawer menu
    const menuToggle = document.querySelector('.menu-toggle');
    const drawerMenu = document.querySelector('.drawer-menu');
    const menuOverlay = document.querySelector('.menu-overlay');
    const closeMenu = document.querySelector('.close-menu');
    const menuLinks = document.querySelectorAll('.menu-nav a');
    const contentSections = document.querySelectorAll('.content-section');
    const exploreButton = document.getElementById('explore-button');
    const mainContent = document.querySelector('.main-content');

    // Hide all sections except home initially
    function hideAllSections() {
        contentSections.forEach(section => {
            section.style.display = 'none';
        });
        document.getElementById('home').style.display = 'block';
    }

    // Show specific content section
    function showSection(sectionId) {
        // Hide all sections
        contentSections.forEach(section => {
            section.style.display = 'none';
        });
        
        // Show the selected section
        const targetSection = document.getElementById(sectionId);
        if (targetSection) {
            targetSection.style.display = 'block';
            // Scroll to top of the section
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    }

    // Toggle drawer menu
    function toggleMenu() {
        drawerMenu.classList.toggle('active');
        menuOverlay.classList.toggle('active');
    }

    // Close drawer menu
    function closeDrawerMenu() {
        drawerMenu.classList.remove('active');
        menuOverlay.classList.remove('active');
    }

    // Event Listeners
    menuToggle.addEventListener('click', toggleMenu);
    closeMenu.addEventListener('click', closeDrawerMenu);
    menuOverlay.addEventListener('click', closeDrawerMenu);

    // Handle menu link clicks
    menuLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const sectionId = link.getAttribute('href').substring(1);
            showSection(sectionId);
            closeDrawerMenu();
        });
    });

    // Explore button functionality
    if (exploreButton) {
        exploreButton.addEventListener('click', () => {
            showSection('meteor-shower');
        });
    }

    // Handle escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && drawerMenu.classList.contains('active')) {
            closeDrawerMenu();
        }
    });

    // Initialize meteor shower functionality
    initMeteorShower();

    // Hide all sections except home initially
    hideAllSections();
});

// Function to create random shooting stars
function createShootingStars() {
    const stars = document.querySelectorAll('.shooting-star');
    stars.forEach(star => {
        // Random starting position
        const startX = Math.random() * window.innerWidth;
        const startY = Math.random() * window.innerHeight;
        star.style.setProperty('--start-x', `${startX}px`);
        star.style.setProperty('--start-y', `${startY}px`);
        
        // Random delay
        const delay = Math.random() * 6;
        star.style.animationDelay = `${delay}s`;
    });
}

// Initialize shooting stars
createShootingStars();

// Update shooting stars positions periodically
setInterval(createShootingStars, 6000);

// Navigation and Mobile Menu
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');
    const navLinksItems = document.querySelectorAll('.nav-links a');

    // Mobile menu toggle
    navToggle.addEventListener('click', () => {
        navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    });

    // Close mobile menu when clicking a link
    navLinksItems.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                navLinks.style.display = 'none';
            }
        });
    });

    // Handle window resize
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            navLinks.style.display = 'flex';
        } else {
            navLinks.style.display = 'none';
        }
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Active link highlighting
    window.addEventListener('scroll', () => {
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.nav-links a');
        
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - 60) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === current) {
                link.classList.add('active');
            }
        });
    });
}); 