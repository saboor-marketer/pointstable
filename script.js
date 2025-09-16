// Team logos mapping
const teamLogos = {
    // HBL PSL Teams
    'Islamabad United': 'https://upload.wikimedia.org/wikipedia/en/9/92/Islamabad_United.png',
    'Karachi Kings': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4kGvXTYDPKngUP3gADJqOgSxPw_no2Kx8Hg&s',
    'Lahore Qalandars': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZzhqGI8zxvX4Ad1YgnAFQ7KvEIixZqMY6LA&s',
    'Multan Sultans': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjwGsAL7eB3WsDam7bUsVymnj5kFK-i1-l0r-7MSOCBccMGH_3hVkr3q9zzlldpE4rErc&usqp=CAU',
    'Peshawar Zalmi': 'https://img1.hscicdn.com/image/upload/f_auto/lsci/db/PICTURES/CMS/313500/313519.logo.png',
    'Quetta Gladiators': 'https://quettagladiators.com/wp-content/uploads/2021/10/qg-new-logo.png',
    
    // IPL Teams
    'Chennai Super Kings': 'https://toppng.com/uploads/preview/chennai-super-kings-logo-png-csk-team-2018-players-list-11563011464suvpiqn93x.png',
    'Delhi Capitals': 'https://upload.wikimedia.org/wikipedia/en/thumb/2/2f/Delhi_Capitals.svg/1200px-Delhi_Capitals.svg.png',
    'Gujarat Titans': 'https://upload.wikimedia.org/wikipedia/en/thumb/0/09/Gujarat_Titans_Logo.svg/1200px-Gujarat_Titans_Logo.svg.png',
    'Kolkata Knight Riders': 'https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/Kolkata_Knight_Riders_Logo.svg/800px-Kolkata_Knight_Riders_Logo.svg.png',
    'Lucknow Super Giants': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScG6HQoC7LHdbCjykh9UEot8ZY_NOqeQanMoGhFJaIBG9Ugaxwmb_x3oKLJbfjvVNZEFs&usqp=CAU',
    'Mumbai Indians': 'https://upload.wikimedia.org/wikipedia/en/thumb/c/cd/Mumbai_Indians_Logo.svg/1200px-Mumbai_Indians_Logo.svg.png',
    'Punjab Kings': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH_oWvqAcLN7eV_cbzjhGiHehph4NLCVbVnQ&s',
    'Rajasthan Royals': 'https://img1.hscicdn.com/image/upload/f_auto/lsci/db/PICTURES/CMS/400400/400406.png',
    'Royal Challengers Bangalore': 'https://upload.wikimedia.org/wikipedia/en/thumb/d/d4/Royal_Challengers_Bengaluru_Logo.svg/250px-Royal_Challengers_Bengaluru_Logo.svg.png',
    'Sunrisers Hyderabad': 'https://upload.wikimedia.org/wikipedia/en/thumb/5/51/Sunrisers_Hyderabad_Logo.svg/1200px-Sunrisers_Hyderabad_Logo.svg.png'
};

// League logos
const leagueLogos = {
    psl: 'https://upload.wikimedia.org/wikipedia/en/5/52/Pakistan_Super_League_9.png',
    ipl: 'https://upload.wikimedia.org/wikipedia/en/thumb/1/19/TATA_IPL_2024_Logo.png/250px-TATA_IPL_2024_Logo.png'
};

// Default logo for fallback
const defaultLogo = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNyaWNrZXQtYmF0Ij48cGF0aCBkPSJNMTQgNy8xNi4yIDIyIDkgMTdsLTUgMSAzLjYtMy41YTIgMiAwIDAgMC0uNS0zbC0zLjUtMy41IDxwYXRoIGQ9Ik0xNi41IDlhLjUuNSAwIDEgMSAwLTEgLjUuNSAwIDAgMSAwIDF6Ii8+PHBhdGggZD0iTTIyIDhhMiAyIDAgMCAwLTEtMS43MmwttTEwLTItMS40IDEuNCIvPjwvc3ZnPg==';

// Latest data for HBL PSL 2024
const pslTeams = [
    { name: 'Multan Sultans', played: 8, won: 6, lost: 2, nr: 0, points: 12, nrr: 1.28 },
    { name: 'Peshawar Zalmi', played: 8, won: 5, lost: 3, nr: 0, points: 10, nrr: 0.85 },
    { name: 'Islamabad United', played: 8, won: 5, lost: 3, nr: 0, points: 10, nrr: 0.45 },
    { name: 'Quetta Gladiators', played: 8, won: 4, lost: 4, nr: 0, points: 8, nrr: 0.12 },
    { name: 'Karachi Kings', played: 8, won: 3, lost: 5, nr: 0, points: 6, nrr: -0.30 },
    { name: 'Lahore Qalandars', played: 8, won: 1, lost: 7, nr: 0, points: 2, nrr: -1.05 }
];

// Latest data for TATA IPL 2024
const iplTeams = [
    { name: 'Rajasthan Royals', played: 8, won: 7, lost: 1, nr: 0, points: 14, nrr: 0.93 },
    { name: 'Kolkata Knight Riders', played: 7, won: 5, lost: 2, nr: 0, points: 10, nrr: 1.20 },
    { name: 'Chennai Super Kings', played: 7, won: 4, lost: 3, nr: 0, points: 8, nrr: 0.53 },
    { name: 'Sunrisers Hyderabad', played: 7, won: 4, lost: 3, nr: 0, points: 8, nrr: 0.41 },
    { name: 'Lucknow Super Giants', played: 8, won: 4, lost: 4, nr: 0, points: 8, nrr: 0.15 },
    { name: 'Delhi Capitals', played: 8, won: 4, lost: 4, nr: 0, points: 8, nrr: -0.06 },
    { name: 'Gujarat Titans', played: 8, won: 4, lost: 4, nr: 0, points: 8, nrr: -0.19 },
    { name: 'Mumbai Indians', played: 8, won: 3, lost: 5, nr: 0, points: 6, nrr: -0.35 },
    { name: 'Royal Challengers Bangalore', played: 8, won: 2, lost: 6, nr: 0, points: 4, nrr: -0.54 },
    { name: 'Punjab Kings', played: 8, won: 2, lost: 6, nr: 0, points: 4, nrr: -0.29 }
];

// DOM Elements
const pslTbody = document.getElementById('psl-tbody');
const iplTbody = document.getElementById('ipl-tbody');
const bubblesContainer = document.getElementById('bubbles');
const pslLeagueLogo = document.getElementById('psl-league-logo');
const iplLeagueLogo = document.getElementById('ipl-league-logo');

// Format number with + sign if positive
function formatNumber(num) {
    return num > 0 ? `+${num.toFixed(2)}` : num.toFixed(2);
}

// Create table row HTML with team logo
function createTeamRow(team, index) {
    const teamLogo = teamLogos[team.name] || defaultLogo;
    
    return `
        <tr>
            <td class="team-cell">
                <div class="team-logo-container">
                    <img src="${teamLogo}" alt="${team.name} Logo" class="team-logo" 
                         onerror="this.onerror=null; this.src='${defaultLogo}'; this.style.padding='4px';">
                </div>
                <span class="team-name">${team.name}</span>
            </td>
            <td>${team.played}</td>
            <td>${team.won}</td>
            <td>${team.lost}</td>
            <td>${team.nr}</td>
            <td class="points">0</td>
            <td class="nrr">${formatNumber(team.nrr)}</td>
        </tr>
    `;
}

// Animate counting up numbers
function animateValue(element, start, end, duration) {
    const range = end - start;
    const minFrameTime = 50; // 50ms per frame
    const totalFrames = Math.round(duration / minFrameTime);
    let frame = 0;
    
    const counter = setInterval(() => {
        frame++;
        const progress = frame / totalFrames;
        const current = Math.round(start + (range * progress));
        
        element.textContent = current;
        
        if (frame === totalFrames) {
            clearInterval(counter);
        }
    }, minFrameTime);
}

// Initialize tables
function initializeTables() {
    // Set league logos
    pslLeagueLogo.src = leagueLogos.psl;
    iplLeagueLogo.src = leagueLogos.ipl;
    
    // Add error handling for league logos
    pslLeagueLogo.onerror = () => { pslLeagueLogo.style.display = 'none'; };
    iplLeagueLogo.onerror = () => { iplLeagueLogo.style.display = 'none'; };
    // Sort teams by points (descending) and NRR (descending)
    const sortedPslTeams = [...pslTeams].sort((a, b) => {
        if (b.points !== a.points) return b.points - a.points;
        return b.nrr - a.nrr;
    });
    
    const sortedIplTeams = [...iplTeams].sort((a, b) => {
        if (b.points !== a.points) return b.points - a.points;
        return b.nrr - a.nrr;
    });
    
    // Populate PSL table
    pslTbody.innerHTML = sortedPslTeams.map(createTeamRow).join('');
    
    // Populate IPL table
    iplTbody.innerHTML = sortedIplTeams.map(createTeamRow).join('');
    
    // Animate points counting up
    setTimeout(() => {
        document.querySelectorAll('#psl-table .points').forEach((el, index) => {
            const team = sortedPslTeams[index];
            animateValue(el, 0, team.points, 1500);
        });
        
        document.querySelectorAll('#ipl-table .points').forEach((el, index) => {
            const team = sortedIplTeams[index];
            animateValue(el, 0, team.points, 1500);
        });
    }, 300);
}

// Create bubbles for animation
function createBubbles() {
    const bubbleCount = 15;
    
    for (let i = 0; i < bubbleCount; i++) {
        const bubble = document.createElement('div');
        bubble.className = 'bubble';
        
        // Random size between 10 and 80px
        const size = Math.random() * 70 + 10;
        
        // Random position
        const left = Math.random() * 100;
        const delay = Math.random() * 5;
        const duration = Math.random() * 15 + 10; // 10-25 seconds
        const opacity = Math.random() * 0.3 + 0.2; // 0.2-0.5 opacity
        
        // Apply styles
        bubble.style.width = `${size}px`;
        bubble.style.height = `${size}px`;
        bubble.style.left = `${left}%`;
        bubble.style.animationDelay = `${delay}s`;
        bubble.style.animationDuration = `${duration}s`;
        bubble.style.opacity = opacity;
        
        // Random bubble color based on position (left or right half)
        if (left < 50) {
            bubble.style.background = 'rgba(0, 110, 51, 0.1)'; // PSL color
        } else {
            bubble.style.background = 'rgba(255, 78, 0, 0.1)'; // IPL color
        }
        
        bubblesContainer.appendChild(bubble);
    }
}

// Add hover effect to table rows
document.addEventListener('DOMContentLoaded', () => {
    // Initialize tables
    initializeTables();
    
    // Create bubbles
    createBubbles();
    
    // Add hover effect to table rows
    const addHoverEffect = (tableId) => {
        const rows = document.querySelectorAll(`#${tableId} tbody tr`);
        rows.forEach(row => {
            row.addEventListener('mouseenter', () => {
                row.style.transform = 'scale(1.02)';
                row.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
                row.style.zIndex = '1';
            });
            
            row.addEventListener('mouseleave', () => {
                row.style.transform = 'scale(1)';
                row.style.boxShadow = 'none';
                row.style.zIndex = '0';
            });
        });
    };
    
    // Initialize hover effects after tables are loaded
    setTimeout(() => {
        addHoverEffect('psl-table');
        addHoverEffect('ipl-table');
    }, 500);
    
    // Add animation to cards on scroll
    const animateOnScroll = () => {
        const cards = document.querySelectorAll('.card');
        cards.forEach(card => {
            const cardPosition = card.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (cardPosition < screenPosition) {
                card.classList.add('fade-in');
            }
        });
    };
    
    // Initial check
    animateOnScroll();
    
    // Check on scroll
    window.addEventListener('scroll', animateOnScroll);
});
