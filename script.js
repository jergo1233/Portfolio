// Smooth scrolling for nav links
let anchors = document.querySelectorAll('a[href^="#"]');

for (let i = 0; i < anchors.length; i++) {
  anchors[i].addEventListener('click', function(e) {
    e.preventDefault();
    let target = document.querySelector(this.getAttribute('href'));
    if (target) {
      // Get the height of the fixed navbar
      const navbarHeight = document.querySelector('.navbar').offsetHeight;
      window.scrollTo({ top: target.offsetTop - navbarHeight, behavior: 'smooth' });
    }
  });
}

// Animate skill bars
function animateSkills() {
  let skills = document.querySelectorAll('.skill');

  for (let i = 0; i < skills.length; i++) {
    let skill = skills[i];
    let level = skill.getAttribute('data-level');
    let fill = skill.querySelector('.fill');
    // let levelText = skill.querySelector('.level-text'); // This element doesn't exist in HTML
    let percentText = skill.querySelector('.percent-text');

    let levelMap = {
      'Novice': 10,
      'Beginner': 25,
      'Intermediate': 50,
      'Proficient': 65,
      'Advanced': 80,
      'Highly skilled': 90,
      'Expert': 100
    };

    let percent = levelMap[level] || 0;
    fill.style.width = percent + '%';
    // if (levelText) levelText.textContent = `(${level})`; // Commented out as level-text is not in HTML
    if (percentText) percentText.textContent = `- ${percent}%`;
  }
}

// Animate sections on scroll
let sections = document.querySelectorAll('.section');
let observer = new IntersectionObserver(function(entries) {
  for (let i = 0; i < entries.length; i++) {
    let entry = entries[i];
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      // updateBodyBackground(entry.target.id); // This function is not fully implemented or necessary based on provided CSS

      // Animate skills only when skills section is visible
      if (entry.target.id === 'skills') {
        animateSkills();
      }
    }
  }
}, { threshold: 0.2 });

for (let i = 0; i < sections.length; i++) {
  observer.observe(sections[i]);
}

// The updateBodyBackground function was not fully utilized in the provided CSS,
// and the body background is set once in the base styles.
// If dynamic background changes per section are desired,
// additional CSS classes for body and their corresponding background styles would be needed.
/*
function updateBodyBackground(sectionId) {
  let body = document.body;
  body.className = ''; // Reset

  if (sectionId === 'projects') body.classList.add('bg-projects');
  else if (sectionId === 'experience') body.classList.add('bg-experience');
  else if (sectionId === 'skills') body.classList.add('bg-skills');
  else if (sectionId === 'activities') body.classList.add('bg-activities');
  else if (sectionId === 'contact') body.classList.add('bg-contact');
};
*/