const languageItems = document.querySelectorAll('.language-item');

  languageItems.forEach(item => {
    const icon = item.querySelector('i');  // icon inside the item


    icon.addEventListener('click', () => {
      const universalText = document.querySelectorAll('.language-container p'); 
      const allText = universalText[7]
        if (icon.classList.contains('fa-python')) {
            allText.textContent = myData["python"];
            allText.style.display = 'block'; // show it
        }
        else if (icon.classList.contains('fa-java')) {
            allText.textContent = myData["java"];;
            allText.style.display = 'block'; // show it
        }
        else if (icon.classList.contains('fa-html5')) {
            allText.textContent = myData["html"];;
            allText.style.display = 'block'; // show it
        }
        else if (icon.classList.contains('fa-css3-alt')) {
            allText.textContent = myData["css"];;
            allText.style.display = 'block'; // show it
        }
        else if (icon.classList.contains('fa-js-square')) {
            allText.textContent = myData["js"];;
            allText.style.display = 'block'; // show it
        }
        else if (icon.classList.contains('devicon-cplusplus-plain')) {
            allText.textContent = myData["Cplus"];;
            allText.style.display = 'block'; // show it
        }
        else if (icon.classList.contains('devicon-git-plain')) {
            allText.textContent = myData["git"];;
            allText.style.display = 'block'; // show it
        }
    });
  });

const myData = {
  python: `Most of my personal projects use python. I've used python at my internship to write code that helped with military testing. I've also used python to learn about supervised machine learning in class. My personal projects
  include learning how to make a discord bot to play music for my friends personal server and other fun projects I code on the side.`,
  java: `My experience of Java comes from my classes as most beginning programming classes at UCSD start with Java as the base. My foundations for Java began in AP CS A back in highschool. `,
  html: `My experience came from my first internship with Opportunities for All where I learned progrmaming for html. I also learned a lot making this personal website, and my school project for CSE 110 `,
  css: `CSS is very interesting. I mainly learned CSS through making this website you're reading now so if you have any feedback feel free to let me know such as how I can improve my CSS`, 
  js: `JS is really fun but challenging. I often try to avoid JS if I can help it but I think it has a lot of possibilities.`,
  Cplus: `My experience with C++ came from my CSE 30 class where we learned the basics of computers and their memory. In that class I also learned quite a bit about ARM assembly and memory management`, 
  git: `Learned the most about Git from CSE 110 where we learned how the Agile development process and best practices within the industry is to use Git to track changes and be able to cooperate`
};

