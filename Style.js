// Initial variables
let playerName = '';
let playerGender = '';
let playerCareer = '';
let cash = 0;
let energy = 100;
let week = 1;
let firstCareerBoost = 1.05; // 5% boost for the first career selected

// Elements
const currencyElement = document.querySelector('.currency');
const energyElement = document.querySelector('.energy');
const weekElement = document.querySelector('.week');
const nextWeekBtn = document.getElementById('nextWeekBtn');
const popupStart = document.getElementById('popupStart');

// Start the game and update the player info
function startGame(name, gender, career) {
    playerName = name;
    playerGender = gender;
    playerCareer = career;
    firstCareerBoost = 1.05; // Apply the career boost
    
    popupStart.classList.remove('active');
    updateStats();
}

// Update the cash, energy, and week display
function updateStats() {
    currencyElement.textContent = `Cash: $${cash}`;
    energyElement.textContent = `Energy: ${energy}/100`;
    weekElement.textContent = `Week ${week}, 2024`;
}

// Select first career and apply 5% boost
function selectFirstCareer(career) {
    startGame(document.getElementById('playerName').value, document.getElementById('genderSelect').value, career);
}

// Go to next week
nextWeekBtn.addEventListener('click', function() {
    week++;
    energy = 100; // Restore energy every week
    cash += Math.floor(Math.random() * 500); // Random cash each week
    updateStats();
});

// Tab switching
function openTab(tabId) {
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => tab.classList.remove('active'));
    const activeTab = document.getElementById(tabId);
    activeTab.classList.add('active');
}

// Show Career details
function showMusicCareer() {
    document.getElementById('careerDetails').innerHTML = `
        <h3>Music Career</h3>
        <p>Boost your popularity and earn money by producing songs!</p>
        <button onclick="earnCash(300)">Record a Song (+$300)</button>
    `;
}

function showMovieCareer() {
    document.getElementById('careerDetails').innerHTML = `
        <h3>Movie Career</h3>
        <p>Become a star in movies and earn through blockbuster hits!</p>
        <button onclick="earnCash(500)">Shoot a Movie (+$500)</button>
    `;
}

function showInfluencerCareer() {
    document.getElementById('careerDetails').innerHTML = `
        <h3>Influencer & Other Careers</h3>
        <p>Increase your social media presence and earn sponsorship deals!</p>
        <button onclick="earnCash(200)">Post on Social Media (+$200)</button>
    `;
}

// Earning cash for different careers
function earnCash(amount) {
    if (energy >= 10) { // Ensure player has enough energy to work
        cash += amount;
        energy -= 10; // Each action costs 10 energy
        updateStats();
    } else {
        alert('Not enough energy to perform this action.');
    }
}

// Start a new company
function startNewCompany() {
    document.getElementById('companyDetails').innerHTML = `
        <h3>Start a New Company</h3>
        <button onclick="investInCompany()">Invest in Company (+$1000)</button>
    `;
}

function investInCompany() {
    if (cash >= 1000) {
        cash -= 1000;
        updateStats();
        alert('You have successfully started a new company!');
    } else {
        alert('You need more money to start a company.');
    }
}

// View your empire overview
function viewEmpire() {
    document.getElementById('companyDetails').innerHTML = `
        <h3>Your Empire Overview</h3>
        <p>Your empire is growing! Keep investing to expand.</p>
    `;
}

// Level up character traits
function levelTraits() {
    document.getElementById('characterDetails').innerHTML = `
        <h3>Level Traits</h3>
        <p>Boost your character traits to increase performance!</p>
        <button onclick="boostTraits()">Level Up Traits (+$500)</button>
    `;
}

function boostTraits() {
    if (cash >= 500) {
        cash -= 500;
        updateStats();
        alert('Traits leveled up!');
    } else {
        alert('You need more money to level up your traits.');
    }
}

// Take lessons to improve skills
function takeLessons() {
    document.getElementById('characterDetails').innerHTML = `
        <h3>Take Lessons</h3>
        <p>Improve your skills and increase career progression.</p>
        <button onclick="takeMusicLessons()">Take Music Lessons (+$300)</button>
        <button onclick="takeActingLessons()">Take Acting Lessons (+$400)</button>
    `;
}

function takeMusicLessons() {
    if (cash >= 300) {
        cash -= 300;
        updateStats();
        alert('Music skills improved!');
    } else {
        alert('You need more money to take lessons.');
    }
}

function takeActingLessons() {
    if (cash >= 400) {
        cash -= 400;
        updateStats();
        alert('Acting skills improved!');
    } else {
        alert('You need more money to take lessons.');
    }
}

// Find a job in the Home section
function findJob() {
    document.getElementById('homeDetails').innerHTML = `
        <h3>Find a Job</h3>
        <p>Search for new opportunities to earn money!</p>
        <button onclick="earnCash(100)">Apply for a Job (+$100)</button>
    `;
}

// View properties in the Home section
function viewProperties() {
    document.getElementById('homeDetails').innerHTML = `
        <h3>Your Properties</h3>
        <p>Manage your properties and assets.</p>
    `;
}

// View security options in the Home section
function viewSecurity() {
    document.getElementById('homeDetails').innerHTML = `
        <h3>Security Options</h3>
        <p>Protect your empire with security upgrades.</p>
    `;
}

// View media stats and charts
function viewMediaStats() {
    document.getElementById('homeDetails').innerHTML = `
        <h3>Media Stats</h3>
        <p>See how your career is performing in the media.</p>
    `;
}

// View awards and events
function viewAwards() {
    document.getElementById('homeDetails').innerHTML = `
        <h3>Awards & Events</h3>
        <p>Participate in events and win awards!</p>
    `;
}
