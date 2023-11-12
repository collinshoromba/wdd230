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





//Json script 
document.addEventListener("DOMContentLoaded", function () {
    const membersContainer = document.getElementById("membersContainer");
    const viewToggle = document.querySelectorAll('input[name="view"]');
  
    // Load JSON data
    fetch('data/members.json')
      .then(response => response.json())
      .then(data => displayMembers(data.members));
  
    // Display members based on the selected view
    function displayMembers(members) {
      viewToggle.forEach(input => {
        input.addEventListener("change", function () {
          membersContainer.innerHTML = "";
          const view = this.value;
          if (view === "grid") {
            displayGrid(members);
          } else if (view === "list") {
            displayList(members);
          }
        });
      });
  
      // Initial display
      displayGrid(members);
    }
  
    // Display members as cards
    function displayGrid(members) {
      members.forEach(member => {
        const card = document.createElement("div");
        card.classList.add("member-card");
        card.innerHTML = `
          <h3>${member.name}</h3>
          <p>${member.address}</p>
          <p>${member.phone}</p>
          <p><a href="${member.website}" target="_blank">${member.website}</a></p>
          <img src="images/${member.image}" alt="${member.name}">
          <p>Membership Level: ${member.membership_level}</p>
          <p>${member.other_info}</p>
        `;
        membersContainer.appendChild(card);
      });
    }
  
    // Display members as a list
    function displayList(members) {
      members.forEach(member => {
        const listItem = document.createElement("div");
        listItem.classList.add("member-list-item");
        listItem.innerHTML = `
          <h3>${member.name}</h3>
          <p>${member.address}</p>
          <p>${member.phone}</p>
          <p><a href="${member.website}" target="_blank">${member.website}</a></p>
          <p>Membership Level: ${member.membership_level}</p>
          <p>${member.other_info}</p>
        `;
        membersContainer.appendChild(listItem);
      });
    }
  });