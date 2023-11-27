document.addEventListener("DOMContentLoaded", function () {
    const spotlight = document.getElementById("spotlight");
  
    fetch('data/members.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        const members = data.members;
        displayRandomMembers(members);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  
    function displayRandomMembers(members) {
      const silverGoldMembers = members.filter(member => member.membership_level === 'Silver' || member.membership_level === 'Gold');
  
      const numberOfMembersToShow = Math.floor(Math.random() * 2) + 2;
      const selectedMembers = [];
      while (selectedMembers.length < numberOfMembersToShow && silverGoldMembers.length > 0) {
        const randomIndex = Math.floor(Math.random() * silverGoldMembers.length);
        selectedMembers.push(silverGoldMembers.splice(randomIndex, 1)[0]);
      }
  
      displaySpotlight(selectedMembers);
    }
  
    function displaySpotlight(members) {
      spotlight.innerHTML = '';
      members.forEach(member => {
        const memberDiv = document.createElement('div');
        memberDiv.innerHTML = `
          <h2>${member.name}</h2>
          <p>Membership Level: ${member.membership_level}</p>
          <img src="images/${member.image}" alt="${member.name}">
          <!-- Other member information -->
        `;
        spotlight.appendChild(memberDiv);
      });
    }
  });