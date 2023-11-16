const baseURL = "https://collinshoromba.github.io/wdd230/";
const linksURL = "https://collinshoromba.github.io/wdd230/data/links.json";
async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data);
  }
  
  getLinks();


  function displayLinks(weeks) {
    // Get the UL element where the links will be appended
    const ul = document.querySelector('#ul');
  
    // Loop through each week in the provided array
    weeks.forEach(week => {
      // Create a new LI element for this week
      const li = document.createElement('li');
  
      // Loop through each link in the "links" object for this week
      week.links.forEach(link => {
        // Create a new A element for each link
        const a = document.createElement('a');
        a.href = link.url;
        a.textContent = link.title;
        a.target = '_blank';
  
        // Append the A element to the LI element
        li.appendChild(a);
  
        // If there are more links in this week, add a separator
        if (week.links.indexOf(link) < week.links.length - 1) {
          const separator = document.createTextNode(' | ');
          li.appendChild(separator);
        }
      });
  
      // Append the LI element to the UL
      ul.appendChild(li);
    });
  }
  
  // Example usage with your sample data
  const weeksData = [
    {
      week: "Week 1",
      links: [
        {
          title: "Lesson 01 Holygrail",
          url: "lesson01/holygrail.html"
        }
      ]
    },
    {
      week: "Week 2",
      links: [
        {
          title: "Lesson 02 Design Principles",
          url: "lesson02/design-principles.html"
        },
        {
          title: "Media Query",
          url: "lesson01/media-query.html"
        }
      ]
    },
    {
      week: "Week 3",
      links: [
        {
            title: "Lesson 03 Combinators",
            url: "https://www.w3schools.com/css/exercise.asp?filename=exercise_combinators4"
        },
        {
           title: "Harmburger Menu",
           url: "https://codepen.io/choromba/pen/BavVWMN" 
        }
      ]  
    },
    {
      week: "Week 5",
      links: [
        {
            title: "Lesson 05 DOM Manipulation",
            url: "lesson05/bom.html"
        }
      ]  
    },

    {
      week: "Week 6",
      links: [
        {
            title: "Lesson 06 Webp ",
            url: "lesson06/images/landscape.webp"
        },
        {
            title: "Responsive Images",
            url: "lesson06/responsive-images.html"
        }
      ]  
    },
    {
      week: "Week 7",
      links: [
        {
            title: "Lesson 07 Web Storage API",
            url: "lesson07/bom.html"
        },
        {
            title: "Lazy Loading",
            url: "lesson03/lazyload.html"
        }
      ]  
    },

    {
      week: "Week 8",
      links: [
        {
            title: "Lesson 08 Table Build",
            url: "lesson08/tablebuild.html"
        },
        {
            title: "Form",
            url: "form.html"
        }
      ]  
    },

    {
        week: "Week 9",
        links: [
          {
              title: "Lesson 09 The Fetch API - Latter-Day Prophets",
              url: "lesson09/prophets.html"
          }
        ]  
    },

    {
        week: "Week 10",
        links: [
          {
              title: "Lesson 10",
              url: "lesson10/weather.html"
          }
        ]  
    },

    {
        week: "Week 11",
        links: [
          {
              title: "Lesson 11",
              url: ""
          }
        ]  
    },

    {
        week: "Week 12",
        links: [
          {
              title: "Lesson 12",
              url: ""
          }
        ]  
    },

    {
        week: "Week 13",
        links: [
          {
              title: "Lesson 13",
              url: ""
          }
        ]  
    },

    {
        week: "Week 14",
        links: [
          {
              title: "Lesson 14",
              url: ""
          }
        ]  
    },
  ];
  
  // Call the function with your data
  displayLinks(weeksData);
  