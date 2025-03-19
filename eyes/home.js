// Function to change the background and update content
function changeBackground(name, imageUrl, description) {
  var heroSection = document.getElementById('coffee');
  heroSection.style.backgroundImage = "linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.1)), url('" + imageUrl + "')";

  // Set a responsive background size
  var backgroundSize = calculateResponsiveBackgroundSize();
  heroSection.style.backgroundSize = backgroundSize;

  // Update content on the left side
  var coffeeNameElement = document.getElementById('coffeeName');
  var coffeeDescriptionElement = document.getElementById('coffeeDescription');

  coffeeNameElement.textContent = name;
  coffeeDescriptionElement.textContent = description;
}
function calculateResponsiveBackgroundSize() {
  var windowWidth = window.innerWidth;
  if (windowWidth > 1200) {
    return "cover";
  } else {
    return " 100% 100%";
  }
}


function learnMore() {
  const coffeeNameElement = document.getElementById('coffeeName');
  const coffeeType = coffeeNameElement.textContent.trim().toLowerCase();

  let tutorialTitle, tutorialHistory, tutorialSteps;

  switch (coffeeType) {
    case 'espresso':
      tutorialTitle = 'Espresso Tutorial';
      tutorialHistory = 'Espresso, originating from Italy, is a concentrated coffee with a rich flavor. It was first introduced in the early 20th century.';
      tutorialSteps = [
        'Step 1: Grind 18-20 grams of coffee beans finely.',
        'Step 2: Preheat the espresso machine and portafilter.',
        'Step 3: Tamp the coffee grounds evenly and firmly.',
        'Step 4: Insert the portafilter and start the shot.',
        'Step 5: Extract for approximately 25-30 seconds.',
        'Step 6: Enjoy your strong and flavorful espresso!'
      ];
      break;
    case 'americano':
      tutorialTitle = 'Americano Tutorial';
      tutorialHistory = 'Americano, believed to have originated during World War II, is made by diluting espresso with hot water, resulting in a milder taste.';
      tutorialSteps = [
        'Step 1: Brew a shot of espresso using 18-20 grams of coffee.',
        'Step 2: Heat water separately to near boiling.',
        'Step 3: Pour hot water into the espresso shot.',
        'Step 4: Adjust water amount for desired strength.',
        'Step 5: Stir and enjoy your milder Americano!'
      ];
      break;
    case 'latte':
      tutorialTitle = 'Latte Tutorial';
      tutorialHistory = 'Latte, an Italian term meaning "milk," is a coffee drink with espresso and steamed milk. It gained popularity in the United States in the 1980s.';
      tutorialSteps = [
        'Step 1: Brew a shot of espresso using 18-20 grams of coffee.',
        'Step 2: Steam 6-8 ounces of milk until frothy.',
        'Step 3: Pour steamed milk over the espresso.',
        'Step 4: Optional - add a small amount of foam on top.',
        'Step 5: Garnish with a sprinkle of cocoa or cinnamon.',
        'Step 6: Sip and savor your creamy and delicious latte!'
      ];
      break;
    case 'cappuccino':
      tutorialTitle = 'Cappuccino Tutorial';
      tutorialHistory = 'Cappuccino is a coffee drink that combines espresso, steamed milk, and foam. It originated in Italy and is known for its frothy texture.';
      tutorialSteps = [
        'Step 1: Brew a shot of espresso using 18-20 grams of coffee.',
        'Step 2: Steam equal parts of milk and foam separately.',
        'Step 3: Pour the espresso into a cup.',
        'Step 4: Add equal parts of steamed milk and foam.',
        'Step 5: Dust with cocoa or cinnamon if desired.',
        'Step 6: Enjoy the delightful layers of cappuccino!'
      ];
      break;
    case 'mocha':
      tutorialTitle = 'Mocha Tutorial';
      tutorialHistory = 'Mocha is a chocolate-flavored coffee drink with espresso, steamed milk, and whipped cream. It combines the richness of chocolate with the boldness of coffee.';
      tutorialSteps = [
        'Step 1: Brew a shot of espresso using 18-20 grams of coffee.',
        'Step 2: Mix in 1-2 tablespoons of cocoa powder and sugar.',
        'Step 3: Steam 6-8 ounces of milk until frothy.',
        'Step 4: Pour the chocolate mix into the espresso.',
        'Step 5: Add steamed milk and top with whipped cream.',
        'Step 6: Indulge in the decadent goodness of mocha!'
      ];
      break;
    case 'macchiato':
      tutorialTitle = 'Macchiato Tutorial';
      tutorialHistory = 'Macchiato is an espresso with a small amount of frothy milk on top. The word "macchiato" means "stained" or "spotted" in Italian.';
      tutorialSteps = [
        'Step 1: Brew a shot of espresso using 18-20 grams of coffee.',
        'Step 2: Froth a small amount of milk until creamy.',
        'Step 3: Pour the frothy milk over the espresso.',
        'Step 4: Optional - add a drizzle of caramel or vanilla.',
        'Step 5: Sip and enjoy the bold simplicity of macchiato!'
      ];
      break;
    case 'affogato':
      tutorialTitle = 'Affogato Tutorial';
      tutorialHistory = 'Affogato is a dessert coffee made by pouring espresso over a scoop of ice cream. It originated in Italy and is a delightful combination of hot and cold.';
      tutorialSteps = [
        'Step 1: Brew a shot of espresso using 18-20 grams of coffee.',
        'Step 2: Scoop a generous portion of vanilla ice cream.',
        'Step 3: Pour the hot espresso over the ice cream.',
        'Step 4: Allow the espresso to melt the ice cream slightly.',
        'Step 5: Enjoy the heavenly contrast of hot and cold!'
      ];
      break;
    case 'flat-white':
      tutorialTitle = 'Flat White Tutorial';
      tutorialHistory = 'Flat White is similar to a latte but with a higher proportion of coffee to milk. It originated in Australia and New Zealand and is known for its strong flavor.';
      tutorialSteps = [
        'Step 1: Brew a strong shot of espresso using 18-20 grams of coffee.',
        'Step 2: Steam 6-8 ounces of milk until velvety and smooth.',
        'Step 3: Pour the steamed milk over the espresso.',
        'Step 4: Create a thin layer of microfoam on top.',
        'Step 5: Savor the bold and creamy taste of flat white!'
      ];
      break;
    case 'cortado':
      tutorialTitle = 'Cortado Tutorial';
      tutorialHistory = 'Cortado is an espresso with a small amount of warm milk to reduce its acidity. It originated in Spain and is known for its balance of strong coffee and smooth milk.';
      tutorialSteps = [
        'Step 1: Brew a shot of espresso using 18-20 grams of coffee.',
        'Step 2: Heat a small amount of milk until warm.',
        'Step 3: Pour the warm milk over the espresso.',
        'Step 4: Maintain the boldness of espresso with a touch of smoothness.',
        'Step 5: Enjoy the harmonious blend of cortado!'
      ];
      break;
    case 'iced-coffee':
      tutorialTitle = 'Iced Coffee Tutorial';
      tutorialHistory = 'Iced Coffee is chilled coffee served over ice, often sweetened and/or with milk. It is a refreshing option, especially during warm weather.';
      tutorialSteps = [
        'Step 1: Brew a strong coffee using 18-20 grams of coffee.',
        'Step 2: Let the coffee cool to room temperature.',
        'Step 3: Pour the coffee over a glass filled with ice.',
        'Step 4: Add sweetener or milk if desired.',
        'Step 5: Stir and enjoy the cool and invigorating iced coffee!'
      ];
      break;
    case 'ristretto':
      tutorialTitle = 'Ristretto Tutorial';
      tutorialHistory = 'Ristretto is a very short and strong espresso shot. It is known for its intense flavor and concentration of coffee essence.';
      tutorialSteps = [
        'Step 1: Grind 18-20 grams of coffee beans finely.',
        'Step 2: Preheat the espresso machine and portafilter.',
        'Step 3: Tamp the coffee grounds extra firmly.',
        'Step 4: Extract a short shot, about 15-20 seconds.',
        'Step 5: Experience the concentrated essence of ristretto!'
      ];
      break;

    default:
      tutorialTitle = 'No Tutorial Available';
      tutorialHistory = 'No history available.';
      tutorialSteps = ['No tutorial steps available.'];
  }

  const tutorialTitleElement = document.getElementById('tutorialTitle');
  const tutorialHistoryElement = document.getElementById('tutorialHistory');
  const tutorialStepsElement = document.getElementById('tutorialSteps');

  tutorialTitleElement.textContent = tutorialTitle;
  tutorialHistoryElement.textContent = tutorialHistory;
  tutorialStepsElement.innerHTML = `
    <ol class="tutorial-steps">
        ${tutorialSteps.map(step => `<li>${step}</li>`).join('')}
    </ol>
`;

  document.getElementById('tutorialModal').style.display = 'block';
}
function closeModal() {
  document.getElementById('tutorialModal').style.display = 'none';
}



function watchTutorial() {
  const coffeeNameElement = document.getElementById('coffeeName');
  const coffeeType = coffeeNameElement.textContent.trim().toLowerCase();

  let tutorialLink;

  switch (coffeeType) {
    case 'espresso':
      tutorialLink = 'https://www.youtube.com/watch?v=ZuQu12vMQZM';
      break;
    case 'americano':
      tutorialLink = 'https://www.youtube.com/watch?v=kqbw6bVB01I';
      break;
    case 'latte':
      tutorialLink = 'https://www.youtube.com/watch?v=UxwscVIZ8Qg';
      break;
    default:
      tutorialLink = 'https://www.youtube.com/';
  }

  window.open(tutorialLink, '');
}

document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll("nav ul li a");

  function highlightNavLink() {
    let scrollPos = window.scrollY + 1;

    sections.forEach((section) => {
      const top = section.offsetTop;
      const height = section.offsetHeight;

      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach((link) => {
          link.classList.remove("active");
        });

        const correspondingLink = document.querySelector(
          `nav ul li a[href="#${section.id}"]`
        );

        if (correspondingLink) {
          correspondingLink.classList.add("active");
        }
      }
    });
  }

  window.addEventListener("scroll", highlightNavLink);
});








function navigateToQuizzes() {
  window.location.href = "quizzesLandingPage.html";
}













document.addEventListener('DOMContentLoaded', function () {
  const menuIcon = document.querySelector('.menu-icon');
  const nav = document.querySelector('nav ul');

  menuIcon.addEventListener('click', function () {
    this.classList.toggle('op');
    nav.classList.toggle('show');
  });

  // Close the menu when a navigation link is clicked
  const navLinks = document.querySelectorAll('nav a');
  navLinks.forEach(function (link) {
    link.addEventListener('click', function (event) {
      event.stopPropagation();
      menuIcon.classList.remove('op');
      nav.classList.remove('show');
    });
  });

  // Close the menu when clicking outside the menu icon
  // document.addEventListener('click', function (event) {
  //   if (!menuIcon.contains(event.target)) {
  //     menuIcon.classList.remove('op');
  //     nav.classList.remove('show');
  //   }
  // });
});



function smoothScrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest'
    });
  }
}
function scrollToHome() {
  var homeSection = document.getElementById('coffee');
  if (homeSection) {
    homeSection.scrollIntoView({ behavior: 'smooth' });
  }
}
function scrollToSection(section2) {
  var section = document.getElementById(section2);
  if (section) {
    // Scroll the section into view
    section.scrollIntoView({ behavior: 'smooth' });

    // Adjust the scroll position to account for the fixed navbar
    var navHeight = document.querySelector('nav').offsetHeight;
    window.scrollBy(0, -navHeight);
  }
}



document.addEventListener('DOMContentLoaded', function () {
  const searchInput = document.querySelector('.search_input');
  const suggestionList = document.querySelector('.suggestions');
  const coffeeItems = document.querySelectorAll('.coffee-item');

  searchInput.addEventListener('input', function () {
    const query = searchInput.value.trim().toLowerCase();
    performSearch(query);
  });

  function performSearch(query) {
    console.log('Performing search with query:', query);

    suggestionList.innerHTML = '';

    for (const coffeeItem of coffeeItems) {
      const coffeeName = coffeeItem.getAttribute('onclick').match(/'([^']+)'/)[1];
      if (coffeeName.toLowerCase().includes(query)) {
        const suggestionItem = document.createElement('li');
        suggestionItem.textContent = coffeeName;
        suggestionItem.addEventListener('click', function () {
          searchInput.value = coffeeName;
          suggestionList.innerHTML = '';
          suggestionList.style.display = 'none';

          // Trigger a click on the corresponding coffee item
          coffeeItem.click();
        });
        suggestionList.appendChild(suggestionItem);
      }
    }

    // Show/hide suggestions based on whether there are matches
    suggestionList.style.display = suggestionList.children.length > 0 ? 'block' : 'none';

    for (const coffeeItem of coffeeItems) {
      const coffeeName = coffeeItem.getAttribute('onclick').match(/'([^']+)'/)[1];
      const displayStyle = coffeeName.toLowerCase().includes(query) ? 'block' : 'none';
      coffeeItem.style.display = displayStyle;
    }
  }

  // Close suggestions when clicking outside after performing a search
  document.addEventListener('click', function (event) {
    if (!suggestionList.contains(event.target) && event.target !== searchInput) {
      suggestionList.style.display = 'none';
    }
  });
});
