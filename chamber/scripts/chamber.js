const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});

let d = new Date();

let newUpdate = document.getElementById('footer-sect');
newUpdate.querySelector('#currentYear').innerHTML = d.getFullYear();
newUpdate.querySelector('#currentDateAndTime').innerHTML = document.lastModified;


const modeButton = document.querySelector("#mode");
const body = document.querySelector("body");

modeButton.addEventListener("click", () => {
	if (modeButton.textContent.includes("🖤")) {
		body.style.background = "#000";
		body.style.color = "#fff";
		modeButton.textContent = "🤍";
	} else {
		body.style.background = "#eee";
		body.style.color = "#000";
		modeButton.textContent = "🖤";
	}
});


// Function to get the time since the last visit
function getTimeSinceLastVisit() {
    const lastVisit = localStorage.getItem('lastVisit');
    if (lastVisit) {
        const currentTime = new Date();
        const previousVisit = new Date(lastVisit);
        const timeDiff = currentTime - previousVisit;
        const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

        return days;
    }
    return -1; // Return -1 if it's the user's first visit
}

// Function to set the message in the sidebar
function setMessage() {
    const daysSinceLastVisit = getTimeSinceLastVisit();
    const sidebarMessage = document.getElementById('sidebar-message');

    if (daysSinceLastVisit === -1) {
        sidebarMessage.textContent = 'Welcome! Let us know if you have any questions.';
    } else if (daysSinceLastVisit < 1) {
        sidebarMessage.textContent = 'Back so soon! Awesome!';
    } else {
        const dayText = daysSinceLastVisit === 1 ? 'day' : 'days';
        sidebarMessage.textContent = `You last visited ${daysSinceLastVisit} ${dayText} ago.`;
    }
}

// Lazy loading images
const images = document.querySelectorAll('img[data-src]');

function lazyLoad() {
    images.forEach((img) => {
        if (img.getBoundingClientRect().top < window.innerHeight && img.dataset.src) {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
        }
    });
}

window.addEventListener('scroll', lazyLoad);
window.addEventListener('load', setMessage);

// Store the current visit date in localStorage
const currentTime = new Date();
localStorage.setItem('lastVisit', currentTime);

