/* ======================================================================
   Jeffrey Thi — site script (vanilla, no dependencies)
   - mobile nav toggle
   - skills tabs on the home page
   - scroll reveal
   - copy-email button on the contact page
   ====================================================================== */
(function () {
  'use strict';

  /* ---------- Mobile navigation ---------- */
  var toggle = document.querySelector('.nav-toggle');
  var menu = document.getElementById('nav-menu');

  if (toggle && menu) {
    toggle.addEventListener('click', function () {
      var open = menu.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });

    document.addEventListener('click', function (event) {
      if (!menu.classList.contains('open')) return;
      if (menu.contains(event.target) || toggle.contains(event.target)) return;
      menu.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });

    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && menu.classList.contains('open')) {
        menu.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.focus();
      }
    });
  }

  /* ---------- Skills tabs ---------- */
  var SKILLS = {
    python: {
      title: 'Python',
      icon: 'fab fa-python',
      notes: [
        'I have used Python for most of my personal projects.',
        'Something that stood out to me was the amount of, in a sense, non-programming work you have to do to push code to production.',
        'One project I enjoyed was using Python to test out a type of machine learning algorithm called NEAT.',
        'A project I\'m very proud of is my Discord music bot.',
        'My friends used to bond over playing music for each other, so coding this was amazing.'
      ]
    },
    java: {
      title: 'Java',
      icon: 'fab fa-java',
      notes: [
        'My experience with Java came mostly from my basic programming classes in college.',
        'I learned programming basics, OOP, and data structures all in Java.'
      ]
    },
    html: {
      title: 'HTML5',
      icon: 'fab fa-html5',
      notes: [
        'My HTML knowledge came from the first internship I ever had, at Opportunities for All.',
        'At that internship I learned the basics of web dev and also some soft skills.',
        'The rest of my HTML knowledge came from this personal website, which I made without anything fancy.'
      ]
    },
    css: {
      title: 'CSS3',
      icon: 'fab fa-css3-alt',
      notes: [
        'Similar to HTML, my CSS came from my first ever internship in high school.',
        'CSS really is hard to learn as there are so many ways to change element styles.',
        'This project has taught me a lot about CSS, however I know I can always learn more.',
        'So if you have any feedback, feel free to reach out to me. I\'d love to learn.'
      ]
    },
    javascript: {
      title: 'JavaScript',
      icon: 'fab fa-js',
      notes: [
        'My JS knowledge is limited as I haven\'t had the opportunity to use JS that much.'
      ]
    },
    cpp: {
      title: 'C++',
      icon: 'devicon-cplusplus-plain',
      notes: [
        'My C++ knowledge comes from my computer structures class, CSE 30, where we used ARM and C++ to code.',
        'It was really cool seeing one of the basic programming languages and learning about memory management.'
      ]
    },
    git: {
      title: 'Git',
      icon: 'devicon-git-plain',
      notes: [
        'I learned Git mostly from my CSE 110 software development class, where Git is a good project management service.',
        'I learned more of what Git is and how to properly branch on GitHub with Git. This website is also published with GitHub Pages.',
        'Interesting thing I learned: Git is not GitHub.'
      ]
    }
  };

  var skillButtons = document.querySelectorAll('.skill[data-skill]');
  var panel = document.getElementById('skill-panel-content');

  function renderSkill(key) {
    var skill = SKILLS[key];
    if (!skill || !panel) return;

    var list = skill.notes.map(function (note) {
      return '<li>' + note + '</li>';
    }).join('');

    panel.innerHTML =
      '<div class="skill-panel-head"><i class="' + skill.icon + '" aria-hidden="true"></i>' +
      '<h3>' + skill.title + '</h3></div>' +
      '<ul>' + list + '</ul>';
  }

  if (skillButtons.length && panel) {
    skillButtons.forEach(function (button) {
      button.addEventListener('click', function () {
        var key = button.getAttribute('data-skill');
        if (button.getAttribute('aria-selected') === 'true') return;

        skillButtons.forEach(function (other) {
          other.setAttribute('aria-selected', other === button ? 'true' : 'false');
        });

        panel.classList.add('is-swapping');
        window.setTimeout(function () {
          renderSkill(key);
          panel.classList.remove('is-swapping');
        }, 180);
      });
    });

    var initial = document.querySelector('.skill[aria-selected="true"]') || skillButtons[0];
    initial.setAttribute('aria-selected', 'true');
    renderSkill(initial.getAttribute('data-skill'));
  }

  /* ---------- Scroll reveal ---------- */
  var revealEls = document.querySelectorAll('.reveal');

  if (revealEls.length) {
    if ('IntersectionObserver' in window) {
      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      }, { rootMargin: '0px 0px -8% 0px', threshold: 0.1 });

      revealEls.forEach(function (el) { observer.observe(el); });
    } else {
      revealEls.forEach(function (el) { el.classList.add('is-visible'); });
    }
  }

  /* ---------- Copy email (contact page) ---------- */
  var copyButton = document.querySelector('[data-copy-email]');

  if (copyButton) {
    var user = copyButton.getAttribute('data-user');
    var domain = copyButton.getAttribute('data-domain');
    var original = copyButton.innerHTML;

    copyButton.addEventListener('click', function () {
      var address = user + '@' + domain;
      var done = function () {
        copyButton.innerHTML = '<i class="fas fa-check" aria-hidden="true"></i> Copied';
        window.setTimeout(function () { copyButton.innerHTML = original; }, 1800);
      };

      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(address).then(done, function () {
          window.prompt('Copy my email address:', address);
        });
      } else {
        window.prompt('Copy my email address:', address);
      }
    });
  }
})();
